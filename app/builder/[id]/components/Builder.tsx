"use client";

import { useState } from "react";
import type { FormEventHandler, DragEventHandler } from "react";

import { XIcon } from "lucide-react";
import { useParams } from "next/navigation";
import type { PanelGroupOnLayout } from "react-resizable-panels";

import type { Stream } from "@/app/types";
import bytesToBase64 from "@/app/utils/bytesToBase64";
import setCookie from "@/app/utils/setCookie";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

import generateXAuthURL from "../actions/generateXAuthURL";
import saveStream from "../actions/saveStream";
import Header from "../components/Header";

import Blocks from "./Blocks";
import DropZone from "./DropZone";
import Repeater from "./Repeater";
import TitleInput from "./TitleInput";
import TwitterBlock, { getTwitterProps } from "./TwitterBlock";

const sourcesTypes = new Map([
  [
    "instagram",
    {
      component: () => <Button variant="destructive">Instagram</Button>,
      getProps: () => ({}),
    },
  ],
  ["x", { component: TwitterBlock, getProps: getTwitterProps }],
  [
    "youtube",
    { component: () => <Button>Youtube</Button>, getProps: () => ({}) },
  ],
]);

const move = (items: Map<string, unknown>, id: string, to: number) => {
  const clonedMap = new Map(items);
  clonedMap.delete(id);
  const resultMap = Array.from(clonedMap.entries()).reduce(
    (acc, [itemId, value], index) => {
      if (index === to) {
        acc.set(id, items.get(id));
      }
      acc.set(itemId, value);
      return acc;
    },
    new Map()
  );
  if (resultMap.size === clonedMap.size) {
    resultMap.set(id, items.get(id));
  }
  return resultMap;
};

const Builder = ({
  stream,
  defaultLayout,
  defaultShowSidebar,
}: {
  stream: Stream;
  defaultLayout: [number, number];
  defaultShowSidebar: boolean;
}) => {
  const { toast } = useToast();
  const [firstPanel, lastPanel] = defaultLayout;
  const [streamState, setStreamState] = useState<Stream>(stream);
  const [showSidebar, setShowSidebar] = useState(defaultShowSidebar);
  const [sourcesState, setSourcesState] = useState(
    new Map(stream.sources.map((source) => [source._id, source]))
  );
  const [selected, setSelected] = useState<string | null>(null);
  const { id: streamId } = useParams();

  const handleNameInput: FormEventHandler<HTMLInputElement> = (event) => {
    setStreamState((prev) => ({
      ...prev,
      name: (event.target as HTMLInputElement).value,
    }));
  };

  const handleLayout: PanelGroupOnLayout = (sizes) => {
    setCookie("builderLayout", JSON.stringify(sizes));
  };

  const handleToggleSettings = (value: boolean) => {
    setShowSidebar(value);
    setCookie("showSidebar", value ? "1" : "0");
  };

  const handleSave = async () => {
    const stateToSave = {
      ...streamState,
      sources: Array.from(sourcesState.values()),
    };
    const result = await saveStream(stateToSave);
    if (!result) {
      return toast({
        title: "Error",
        description: "An error occurred while saving the stream.",
        variant: "destructive",
      });
    }
    toast({
      title: "Saved",
      description: "Your stream has been saved successfully.",
    });
  };

  const handleXClick = () => {
    setShowSidebar(false);
    setCookie("showSidebar", "0");
  };

  const createHandleDrop: (
    position: number
  ) => DragEventHandler<HTMLDivElement> = (position) => (event) => {
    setSourcesState((prev) =>
      move(prev, event.dataTransfer.getData("text/plain"), position)
    );
  };

  const createHandleDragStart: (
    id: string
  ) => DragEventHandler<HTMLDivElement> = (id: string) => (event) => {
    event.dataTransfer.setData("text/plain", id);
  };

  const createHandleMoveClick: (id: string, position: number) => () => void =
    (id, position) => () => {
      setSourcesState((prev) => move(prev, id, position));
    };

  const createHandleDeleteClick = (id: string) => () => {
    setSourcesState((prev) => {
      const clonedMap = new Map(prev);
      clonedMap.delete(id);
      return clonedMap;
    });
  };

  const createHandleDuplicateClick = (id: string) => () => {
    setSourcesState((prev) => {
      const clonedMap = new Map(prev);
      const source = prev.get(id);
      if (source) {
        const newId = String(Math.random());
        clonedMap.set(newId, { ...source, _id: newId });
      }
      return clonedMap;
    });
  };

  const createHandleRepeaterClick = (id: string) => () => {
    setSelected(id);
  };

  const createHandleXClick = (sourceId: string) => async () => {
    await generateXAuthURL({
      state: bytesToBase64(
        new TextEncoder().encode(JSON.stringify({ sourceId, streamId }))
      ),
    });
  };

  const createHandleInstagramClick = (sourceId: string) => () => {};

  const createHandleFacebookClick = (sourceId: string) => () => {};

  return (
    <div className="flex h-screen flex-col md:flex">
      <Header
        onToggleSettings={handleToggleSettings}
        showSettings={showSidebar}
        onSaveClick={handleSave}
      />
      <Separator />
      <div className="flex-1">
        <ResizablePanelGroup
          direction="horizontal"
          className="size-full"
          onLayout={handleLayout}
        >
          <ResizablePanel defaultSize={firstPanel} minSize={25}>
            <div className="container flex  h-full flex-col items-baseline p-10">
              <TitleInput
                placeholder="Here will be your stream name..."
                value={streamState.name}
                onInput={handleNameInput}
              />
              <Blocks>
                {Array.from(sourcesState.entries()).map(([, source], index) => {
                  if (sourcesTypes.has(source.type)) {
                    const sourceType = sourcesTypes.get(source.type);
                    if (!sourceType) {
                      return null;
                    }
                    const Comp = sourceType.component;
                    const getProps = sourceType.getProps;
                    return (
                      <DropZone
                        key={source._id}
                        onDrop={createHandleDrop(index)}
                      >
                        <Repeater
                          up={index !== 0}
                          down={index !== sourcesState.size - 1}
                          onDragStart={createHandleDragStart(source._id)}
                          onUpClick={createHandleMoveClick(
                            source._id,
                            index - 1
                          )}
                          onDownClick={createHandleMoveClick(
                            source._id,
                            index + 1
                          )}
                          onDeleteClick={createHandleDeleteClick(source._id)}
                          onDuplicateClick={createHandleDuplicateClick(
                            source._id
                          )}
                          onClick={createHandleRepeaterClick(source._id)}
                          onXClick={createHandleXClick(source._id)}
                          onInstagramClick={createHandleInstagramClick(
                            source._id
                          )}
                          onFacebookClick={createHandleFacebookClick(
                            source._id
                          )}
                          selected={selected === source._id}
                        >
                          <Comp {...(getProps(source.meta) as any)} />
                        </Repeater>
                      </DropZone>
                    );
                  }
                  return null;
                })}
              </Blocks>
            </div>
          </ResizablePanel>
          {showSidebar && (
            <>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={lastPanel} minSize={10}>
                <Tabs defaultValue="account" className="w-full">
                  <div className="flex justify-between bg-muted p-2">
                    <TabsList className="grid min-w-60 grid-cols-2">
                      <TabsTrigger value="account">Stream</TabsTrigger>
                      <TabsTrigger value="password">Block</TabsTrigger>
                    </TabsList>
                    <Button variant="ghost" size="icon" onClick={handleXClick}>
                      <XIcon className="size-6" />
                    </Button>
                  </div>
                  <TabsContent value="account">Stream</TabsContent>
                  <TabsContent value="password">Block</TabsContent>
                </Tabs>
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Builder;

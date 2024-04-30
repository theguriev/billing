"use client";

import { ChevronLeft, CirclePlus, Cog } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import bytesToBase64 from "@/app/utils/bytesToBase64";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import generateXAuthURL from "../actions/generateXAuthURL";

import AddPopover from "./AddPopover";

const Header = ({
  showSettings,
  onToggleSettings,
  onSaveClick,
}: {
  showSettings: boolean;
  onToggleSettings: (value: boolean) => void;
  onSaveClick: () => void;
}) => {
  const { id: streamId } = useParams();
  const handleSettingsClick = () => {
    onToggleSettings(!showSettings);
  };

  const settingsVariant = showSettings ? "secondary" : "ghost";

  const handleXClick = async () => {
    await generateXAuthURL({
      state: bytesToBase64(
        new TextEncoder().encode(JSON.stringify({ streamId }))
      ),
    });
  };

  return (
    <div className="flex flex-col items-start justify-between space-y-2 p-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/app">
                <ChevronLeft className="size-6" />
                <span className="sr-only">Go back</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Go back</TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" className="mx-1 h-6" />
        <Tooltip>
          <Popover>
            <PopoverTrigger asChild>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <CirclePlus className="size-6" />
                  <span className="sr-only">Add source</span>
                </Button>
              </TooltipTrigger>
            </PopoverTrigger>
            <PopoverContent className="flex w-96 p-0">
              <AddPopover onXClick={handleXClick} />
            </PopoverContent>
          </Popover>
          <TooltipContent>Add source</TooltipContent>
        </Tooltip>
      </div>
      <div className="ml-auto flex w-full space-x-2 sm:justify-end">
        <Button variant="secondary">Embed</Button>
        <Button variant="secondary" asChild>
          <Link href={`/strm/${streamId}`}>Preview</Link>
        </Button>
        <Button onClick={onSaveClick}>Save</Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={settingsVariant}
              size="icon"
              onClick={handleSettingsClick}
            >
              <Cog className="size-6" />
              <span className="sr-only">Settings</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Settings</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;

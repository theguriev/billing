"use client";

import type { ReactNode, HTMLAttributes, MouseEventHandler } from "react";
import { useState, useCallback } from "react";

import {
  PlusIcon,
  CopyIcon,
  Trash2Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  GripVerticalIcon,
} from "lucide-react";

import { cn } from "@/app/utils/shadcn";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import AddPopover from "./AddPopover";

const Repeater = ({
  children,
  selected,
  up,
  down,
  onAddClick,
  onDeleteClick,
  onDuplicateClick,
  onUpClick,
  onDownClick,
  onXClick,
  onInstagramClick,
  onFacebookClick,
  ...props
}: {
  children: ReactNode;
  up?: boolean;
  down?: boolean;
  selected?: boolean;
  onAddClick?: MouseEventHandler<HTMLButtonElement>;
  onDeleteClick?: MouseEventHandler<HTMLButtonElement>;
  onDuplicateClick?: MouseEventHandler<HTMLButtonElement>;
  onUpClick?: MouseEventHandler<HTMLButtonElement>;
  onDownClick?: MouseEventHandler<HTMLButtonElement>;
  onXClick?: MouseEventHandler<HTMLButtonElement>;
  onInstagramClick?: MouseEventHandler<HTMLButtonElement>;
  onFacebookClick?: MouseEventHandler<HTMLButtonElement>;
} & HTMLAttributes<HTMLDivElement>) => {
  const [isDragging, setIsDragging] = useState(false);
  const handleGripMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);
  const handleGripMouseOver = useCallback(() => {
    setIsDragging(true);
  }, []);

  return (
    <div
      draggable={isDragging}
      className={cn(
        "group relative box-border min-h-24 w-full flex-1 border-y-1 border-r-1 border-transparent bg-background p-4 hover:border-border hover:shadow-builder-primary focus:border-border focus:shadow-builder-primary focus:outline-0",
        selected ? "border-border shadow-builder-primary" : ""
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute bottom-full left-0 box-border border-y-1 border-r-1 border-border bg-background p-1 shadow-builder-primary outline-0 group-hover:flex",
          selected ? "flex" : "hidden"
        )}
      >
        <Tooltip>
          <Popover>
            <PopoverTrigger asChild>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="smallIcon" onClick={onAddClick}>
                  <PlusIcon className="size-4" />
                </Button>
              </TooltipTrigger>
            </PopoverTrigger>
            <PopoverContent className="flex w-96 p-0">
              <AddPopover
                onFacebookClick={onFacebookClick}
                onXClick={onXClick}
                onInstagramClick={onInstagramClick}
              />
            </PopoverContent>
          </Popover>
          <TooltipContent>Add</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="smallIcon" onClick={onDuplicateClick}>
              <CopyIcon className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Duplicate</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="smallIcon" onClick={onDeleteClick}>
              <Trash2Icon className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Delete</TooltipContent>
        </Tooltip>
      </div>
      <div
        className={cn(
          "absolute right-full top-0 flex-col group-hover:flex",
          selected ? "flex" : "hidden"
        )}
      >
        {up && (
          <Button variant="ghost" size="smallIcon" onClick={onUpClick}>
            <ChevronUpIcon className="size-4" />
          </Button>
        )}
        <Button
          variant="ghost"
          size="smallIcon"
          className="hover:bg-transparent"
          onMouseOver={handleGripMouseOver}
          onMouseLeave={handleGripMouseLeave}
        >
          <GripVerticalIcon className="size-4" />
        </Button>
        {down && (
          <Button variant="ghost" size="smallIcon" onClick={onDownClick}>
            <ChevronDownIcon className="size-4" />
          </Button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Repeater;

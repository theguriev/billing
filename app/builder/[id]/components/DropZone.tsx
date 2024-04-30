"use client";

import type { ReactNode, DragEvent, HTMLAttributes } from "react";
import { useState } from "react";

import { cn } from "@/app/utils/shadcn";

const DropZone = ({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) => {
  const [enteredCount, setEnteredCount] = useState(0);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setEnteredCount((prev) => prev - 1);
    props.onDrop?.(event);
  };

  const handleDragEnter = () => {
    setEnteredCount((prev) => prev + 1);
  };

  const handleDragLeave = () => {
    setEnteredCount((prev) => prev - 1);
  };

  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col relative",
        enteredCount > 0 &&
          "after:content-[''] after:absolute after:inset-0 after:z-10 after:shadow-drop-zone after:transition-all after:duration-300 after:ease-in-out"
      )}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      {children}
    </div>
  );
};

export default DropZone;

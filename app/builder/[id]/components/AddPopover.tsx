"use client";

import { MouseEventHandler } from "react";

import { Instagram, Facebook, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

const AddPopover = ({
  onXClick,
  onInstagramClick,
  onFacebookClick,
}: {
  onXClick?: MouseEventHandler<HTMLButtonElement>;
  onInstagramClick?: MouseEventHandler<HTMLButtonElement>;
  onFacebookClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="flex w-full flex-col gap-2 px-2 py-4">
      <div className="px-4 text-sm font-medium">Socials</div>
      <div className="grid grid-cols-3">
        <Button
          variant="ghost"
          className="flex h-auto flex-col gap-2 font-normal"
          onClick={onInstagramClick}
        >
          <Instagram className="size-6" />
          Instagram
        </Button>
        <Button
          variant="ghost"
          className="flex h-auto flex-col gap-2 font-normal"
          onClick={onXClick}
        >
          <Twitter className="size-6" />X
        </Button>
        <Button
          variant="ghost"
          className="flex h-auto flex-col gap-2 font-normal"
          onClick={onFacebookClick}
        >
          <Facebook className="size-6" />
          Facebook
        </Button>
      </div>
    </div>
  );
};

export default AddPopover;

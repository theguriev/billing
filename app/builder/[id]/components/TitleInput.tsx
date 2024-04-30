"use client";

import { InputHTMLAttributes } from "react";

const TitleInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="w-full border-y-1 border-r-1 border-transparent p-4 text-4xl hover:shadow-builder-primary focus:border-border focus:shadow-builder-primary focus:outline-0"
      {...props}
      autoFocus
    />
  );
};

export default TitleInput;

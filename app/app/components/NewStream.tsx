"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import newStream from "../actions/newStream";

const NewStream = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNewClick = async () => {
    setIsLoading(true);
    await newStream();
    setIsLoading(false);
  };
  return (
    <Button onClick={handleNewClick} disabled={isLoading}>
      New stream
    </Button>
  );
};

export default NewStream;

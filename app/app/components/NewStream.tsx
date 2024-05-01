"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

const NewStream = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNewClick = async () => {
    setIsLoading(true);
    setIsLoading(false);
  };
  return (
    <Button onClick={handleNewClick} disabled={isLoading}>
      New stream
    </Button>
  );
};

export default NewStream;

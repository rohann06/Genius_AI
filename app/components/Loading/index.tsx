import Image from "next/image";
import React from "react";
import { SiOpsgenie } from "react-icons/si";

export const Loading = () => {
  return (
    <div className="  h-full flex flex-col gap-y-4 items-center justify-center">
      <div className=" text-2xl md:text-3xl text-red-600 relative animate-bounce">
        <SiOpsgenie />
      </div>
      <p className=" text-sm text-muted-foreground">Genius Is Thinking....</p>
    </div>
  );
};

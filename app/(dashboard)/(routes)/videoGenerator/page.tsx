import Heading from "@/app/components/Heading";
import React from "react";
import { LuVideo } from "react-icons/lu";

const VideoGeneratorPage = () => {
  return (
    <div>
      <Heading
        title="Video Generator"
        subtitle="An advanced video generator AI model"
        icon={<LuVideo />}
        iconColor="text-green-500 text-[25px] font-bold"
        iconBackground="bg-green-200/40 p-2 md:p-4 rounded-lg"
      />
    </div>
  );
};

export default VideoGeneratorPage;

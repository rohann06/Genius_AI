import Heading from "@/app/components/Heading";
import React from "react";
import { LuImage } from "react-icons/lu";

const ImageGeneratorPage = () => {
  return (
    <div>
      <Heading
        title="Image Generator"
        subtitle="An advanced image generator AI model"
        icon={<LuImage />}
        iconColor="text-fuchsia-500 text-[25px] font-bold"
        iconBackground="bg-fuchsia-200/40 p-2 md:p-4 rounded-lg"
      />
    </div>
  );
};

export default ImageGeneratorPage;

import Heading from "@/app/components/Heading";
import React from "react";
import { LuMusic } from "react-icons/lu";

const MusicGeneratorPage = () => {
  return (
    <div>
      <Heading
        title="Music Generator"
        subtitle="An advanced music generator AI model"
        icon={<LuMusic />}
        iconColor="text-orange-500 text-[25px] font-bold"
        iconBackground="bg-orange-200/40 p-2 md:p-4 rounded-lg"
      />
    </div>
  );
};

export default MusicGeneratorPage;

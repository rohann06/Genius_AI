import Heading from "@/app/components/Heading";
import React from "react";
import {
  LuCode2,
  LuImage,
  LuLayoutDashboard,
  LuMessageSquare,
  LuMusic,
  LuVideo,
  LuSettings,
} from "react-icons/lu";

const ChatAi = () => {
  return (
    <div>
      <Heading
        title="Chat AI"
        subtitle="An advanced conversational AI model"
        icon={<LuMessageSquare />}
        iconColor="text-violet-500 text-[25px] font-bold"
        iconBackground="bg-violet-200/40 p-2 md:p-4 rounded-lg"
      />
    </div>
  );
};

export default ChatAi;

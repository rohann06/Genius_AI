"use client";
import Heading from "@/app/components/Heading";
import React, { useState } from "react";
import { LuMessageSquare } from "react-icons/lu";
import toast from "react-hot-toast";

const ChatAi = () => {
  const [chatPrompt, setChatPrompt] = useState("");

  const handleChatAIFrom = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Prompt submited");
    setChatPrompt("");
  };
  return (
    <div>
      <Heading
        title="Chat AI"
        subtitle="An advanced conversational AI model"
        icon={<LuMessageSquare />}
        iconColor="text-violet-500 text-[25px] font-bold"
        iconBackground="bg-violet-200/40 p-2 md:p-4 rounded-lg"
      />
      <form
        onSubmit={handleChatAIFrom}
        className=" flex items-center gap-5 p-1 md:p-2 border-gray-500 border-2 w-full my-7 md:my-10 rounded-xl"
      >
        <input
          value={chatPrompt}
          onChange={(e) => setChatPrompt(e.target.value)}
          name="prompt"
          placeholder=" Write your prompt here......"
          className=" w-full rounded-lg p-2  outline-none"
        />
        <button
          className={` text-white hover:bg-violet-700 bg-violet-500 px-1 py-1 md:px-2 md:py-3 rounded-lg font-medium font-Rubik  md:w-[12%] text-sm md:text-base ${
            !chatPrompt && "cursor-not-allowed opacity-50"
          }`}
        >
          Generate Chat
        </button>
      </form>
      <div>Chats</div>
    </div>
  );
};

export default ChatAi;

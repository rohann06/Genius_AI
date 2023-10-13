"use client";
import { MAX_FREE_COUNT } from "@/constents";
import React from "react";
import { Progress } from "../ui/progress";
import { RiSupabaseFill } from "react-icons/ri";

interface ApiUseCounterProps {
  apiLimitCount: number;
}

const ApiUseCounter = ({ apiLimitCount = 0 }: ApiUseCounterProps) => {
  return (
    <div className="  text-white bg-white/10 p-5 rounded-lg text-center text-sm">
      <p className=" mb-2">
        {apiLimitCount} / {MAX_FREE_COUNT} Free Generations
      </p>
      <Progress
        className=" h-3"
        value={(apiLimitCount / MAX_FREE_COUNT) * 100}
      />
      <button className=" bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500  via-purple-500  to-pink-500  mt-4 py-2 w-full rounded-lg">
        <span className=" flex justify-center items-center gap-2 font-medium text-lg hover:scale-105">
          Upgrade <RiSupabaseFill/>
        </span>
      </button>
    </div>
  );
};

export default ApiUseCounter;

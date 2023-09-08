import Link from "next/link";
import React from "react";
import {
  LuCode2,
  LuImage,
  LuLayoutDashboard,
  LuMessageSquare,
  LuMusic,
  LuVideo,
} from "react-icons/lu";

const NavOptions = () => {
  return (
    <div className=" mt-16 flex flex-col gap-8 text-lg text-[#F5F5F5] font-medium">
      <Link href={"/"}>
        <div className=" flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg">
          <span className=" text-[23px] text-blue-500">
            <LuLayoutDashboard />
          </span>
          Dashboard
        </div>
      </Link>
      <div className=" flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg">
        <span className=" text-[23px] text-violet-500">
          <LuMessageSquare />
        </span>
        Caht AI
      </div>
      <div className=" flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg">
        <span className=" text-[23px] text-fuchsia-500">
          <LuImage />
        </span>
        Image Generator
      </div>
      <div className=" flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg">
        <span className=" text-[23px] text-green-500">
          <LuVideo />
        </span>
        Video Generator
      </div>
      <div className=" flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg">
        <span className=" text-[23px] text-green-500">
          <LuMusic />
        </span>
        Music Generator
      </div>
      <div className=" flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg">
        <span className=" text-[23px] text-teal-500">
          <LuCode2 />
        </span>
        Code Generator
      </div>
    </div>
  );
};

export default NavOptions;

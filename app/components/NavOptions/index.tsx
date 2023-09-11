"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  LuCode2,
  LuImage,
  LuLayoutDashboard,
  LuMessageSquare,
  LuMusic,
  LuVideo,
  LuSettings,
} from "react-icons/lu";

const NavOptions = () => {
  const pathname = usePathname();
  return (
    <>
      <div className=" mt-14 flex flex-col gap-7 text-lg text-[#F5F5F5] font-medium">
        <Link href={"/dashboard"}>
          <div
            className={` ${
              pathname === "/dashboard" && "bg-[#404454]"
            } flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg`}
          >
            <span className=" text-[23px] text-blue-500">
              <LuLayoutDashboard />
            </span>
            Dashboard
          </div>
        </Link>
        <Link href={"/chatAi"}>
          <div
            className={` ${
              pathname === "/chatAi" && "bg-[#404454]"
            } flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg`}
          >
            <span className=" text-[23px] text-violet-500">
              <LuMessageSquare />
            </span>
            Caht AI
          </div>
        </Link>
        <Link href={"/imageGenerator"}>
          <div
            className={` ${
              pathname === "/imageGenerator" && "bg-[#404454]"
            } flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg`}
          >
            <span className=" text-[23px] text-fuchsia-500">
              <LuImage />
            </span>
            Image Generator
          </div>
        </Link>
        <Link href={"/videoGenerator"}>
          <div
            className={` ${
              pathname === "/videoGenerator" && "bg-[#404454]"
            } flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg`}
          >
            <span className=" text-[23px] text-green-500">
              <LuVideo />
            </span>
            Video Generator
          </div>
        </Link>
        <Link href={"/musicGenerator"}>
          <div
            className={` ${
              pathname === "/musicGenerator" && "bg-[#404454]"
            } flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg`}
          >
            <span className=" text-[23px] text-green-500">
              <LuMusic />
            </span>
            Music Generator
          </div>
        </Link>
        <Link href={"/codeGenerator"}>
          <div
            className={` ${
              pathname === "/codeGenerator" && "bg-[#404454]"
            } flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg`}
          >
            <span className=" text-[23px] text-teal-500">
              <LuCode2 />
            </span>
            Code Generator
          </div>
        </Link>
        <div className=" flex gap-3 items-center cursor-pointer hover:bg-[#404454] py-3 px-4 w-full rounded-lg">
          <span className=" text-[23px] text-slate-50">
            <LuSettings />
          </span>
          Settings
        </div>
      </div>
    </>
  );
};

export default NavOptions;

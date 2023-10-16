"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useProModel } from "@/hooks/use-pro-model";
import { Badge } from "../ui/badge";
import {
  LuCheckCheck,
  LuCode2,
  LuImage,
  LuMessageSquare,
  LuMusic,
  LuVideo,
} from "react-icons/lu";
import NavOptionCard from "../NavOptionCard";
import { RiSupabaseFill } from "react-icons/ri";

const NavOptions = [
  {
    title: "Chat AI",
    link: "/chatAi",
    icon: <LuMessageSquare />,
    upprtDivStyle: " p-2 md:p-3 bg-violet-200/40 rounded-lg",
    iconStyle: "text-[23px] text-violet-500",
  },
  {
    title: "Image Generator",
    link: "/imageGenerator",
    icon: <LuImage />,
    upprtDivStyle: "p-2 md:p-3 bg-fuchsia-200/40 rounded-lg",
    iconStyle: "text-[23px] text-fuchsia-500",
  },
  {
    title: "Video Generator",
    link: "/videoGenerator",
    icon: <LuVideo />,
    upprtDivStyle: "p-2 md:p-3 bg-green-200/40 rounded-lg",
    iconStyle: "text-[23px] text-green-500",
  },
  {
    title: "Music Generator",
    link: "/musicGenerator",
    icon: <LuMusic />,
    upprtDivStyle: "p-2 md:p-3 bg-orange-200/40 rounded-lg",
    iconStyle: "text-[23px] text-orange-500",
  },
  {
    title: "Code Generator",
    link: "/codeGenerator",
    icon: <LuCode2 />,
    upprtDivStyle: "p-2 md:p-3 bg-teal-200/40 rounded-lg",
    iconStyle: "text-[23px] text-teal-500",
  },
];

const Promodel = () => {
  const proModel = useProModel();

  return (
    <div>
      <Dialog open={proModel.isOpen} onOpenChange={proModel.onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className=" flex justify-center items-center flex-col gap-y-4 pb-2">
              <div className=" flex items-center gap-x-2 font-bold py-1">
                Upgrade to Genius
                <Badge className=" bg-gradient-to-r hover:bg-gradient-to-r from-indigo-500  via-purple-500  to-pink-500 uppercase py-1 text-sm">
                  Pro
                </Badge>
              </div>
            </DialogTitle>
            <DialogDescription>
              <div className=" flex flex-col gap-y-5 md:gap-y-3 w-full mt-5 md:mt-10">
                {NavOptions.map((NavOption) => (
                  <div className=" flex justify-between items-center p-2 md:p-2  rounded-xl shadow-md border">
                    <div className=" flex items-center gap-2">
                      <div className={NavOption.upprtDivStyle}>
                        <div className={NavOption.iconStyle}>
                          {NavOption.icon}
                        </div>
                      </div>
                      <div className=" text-lg font-Rubik font-semibold">
                        <p>{NavOption.title}</p>
                      </div>
                    </div>
                    <div className=" text-xl m-2">
                      <LuCheckCheck />
                    </div>
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={proModel.onOpen}
              className=" text-white bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500  via-purple-500  to-pink-500  mt-4 py-2 w-full rounded-lg"
            >
              <span className=" flex justify-center items-center gap-2 font-medium text-lg hover:scale-105">
                Upgrade <RiSupabaseFill />
              </span>
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Promodel;

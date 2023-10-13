import React from "react";
import Navbar from "../components/Navbar";
import { UserButton } from "@clerk/nextjs";
import MobileNavbar from "../components/MobileNavbar";
import { SiOpsgenie } from "react-icons/si";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className=" h-full relative">
      <div className=" hidden h-full md:w-80 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-800">
        <div>
          <Navbar apiLimitCount={apiLimitCount} />
        </div>
      </div>
      <main className=" md:pl-80 mx-2 my-3 md:mx-10 md:my-7">
        <div className=" flex md:justify-end  justify-between items-center">
          <div className=" md:hidden md:text-base  font-LexendDeca md:text-[#f6f5f5] font-semibold text-[25px] flex items-center gap-1">
            <span className=" text-red-600 text-[29px]">
              <SiOpsgenie />
            </span>
            Genius.Ai
          </div>
          <div className=" md:hidden ">
            <MobileNavbar />
          </div>
        </div>
        <div className=" flex justify-end items-end">
          <div className=" hidden md:block  px-2 py-2 ">
            <UserButton afterSignOutUrl="/" showName />
          </div>
        </div>

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

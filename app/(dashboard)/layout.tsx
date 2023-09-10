import React from "react";
import Navbar from "../components/Navbar";
import { UserButton } from "@clerk/nextjs";
import MobileNavbar from "../components/MobileNavbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full relative">
      <div className=" hidden h-full md:w-80 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-800">
        <div>
          <Navbar />
        </div>
      </div>
      <main className=" md:pl-80 mx-2 my-5 md:mx-10 md:my-7">
        <div className=" flex md:justify-end justify-between items-center">
          <div className=" md:hidden ">
            <MobileNavbar />
          </div>
          <div className=" flex justify-end items-end ">
            <div className=" bg-gray-200 px-4 py-2 rounded-full">
              <UserButton afterSignOutUrl="/" showName />
            </div>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
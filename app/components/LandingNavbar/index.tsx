"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { SiOpsgenie } from "react-icons/si";

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className=" p-4 bg-transparent flex items-center justify-between">
      <Link href={"/"} className=" flex items-center">
        <div className=" font-LexendDeca text-[#f6f5f5] font-semibold text-[20px] md:text-[30px] flex justify-center items-center gap-3">
          <span className=" text-red-600 md:text-[35px]">
            <SiOpsgenie />
          </span>
          Genius.Ai
        </div>
      </Link>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <button className="rounded-full  bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500  via-purple-500  to-pink-500 py-2 px-4 text-white font-semibold">Get Started</button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;

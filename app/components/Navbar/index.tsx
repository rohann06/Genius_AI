import React from "react";
import { SiOpsgenie } from "react-icons/si";
import NavOptions from "../NavOptions";
import Link from "next/link";
import ApiUseCounter from "../ApiUseCounter";

interface NavbarProps {
  apiLimitCount: number;
}

const Navbar = ({ apiLimitCount = 0 }: NavbarProps) => {
  return (
    <div className=" mx-4 my-8 items-center">
      <Link href={"/"}>
        <div className=" font-LexendDeca text-[#f6f5f5] font-semibold text-[30px] flex justify-center items-center gap-3">
          <span className=" text-red-600 text-[35px]">
            <SiOpsgenie />
          </span>
          Genius.Ai
        </div>
      </Link>
      <div className=" flex flex-col gap-y-32  md:gap-y-32 justify-between">
        {/* Options */}
          <NavOptions />
        {/* API use counter */}
          <ApiUseCounter apiLimitCount={apiLimitCount} />

        {/* Footer */}
        <a href="https://rohan06.vercel.app/">
          <div className=" text-center my-5 text-[#b8b7b7] font-medium underline">
            Roha Ahrue ©2023
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

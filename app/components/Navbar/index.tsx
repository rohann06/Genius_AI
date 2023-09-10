import React from "react";
import { SiOpsgenie } from "react-icons/si";
import NavOptions from "../NavOptions";

const Navbar = () => {
  return (
    <div className=" mx-10 my-8 felx flex-col justify-center items-center">
      <div className=" font-LexendDeca text-[#f6f5f5] font-semibold text-[30px] flex items-center gap-3">
        <span className=" text-red-600 text-[35px]">
          <SiOpsgenie />
        </span>
        Genius.Ai
      </div>

      {/* Options */}
      <NavOptions />

      {/* Footer */}
      <a href="https://rohan06.vercel.app/">
        <div className=" absolute bottom-3 left-[80px] text-center my-5 text-[#b8b7b7] font-medium underline">
          Roha Ahrue ©2023
        </div>
      </a>
    </div>
  );
};

export default Navbar;

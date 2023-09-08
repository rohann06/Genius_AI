import React from "react";
import { SiOpsgenie } from "react-icons/si";
import NavOptions from "../NavOptions";

const Navbar = () => {
  return (
    <div className=" mx-10 my-8 felx flex-col justify-center items-center">
      <div className=" font-LexendDeca text-[#F5F5F5] font-semibold text-[30px] flex items-center gap-3">
        <span className=" text-red-600 text-[35px]">
          <SiOpsgenie />
        </span>
        Genius.Ai
      </div>

      {/* Options */}
      <NavOptions />

      {/* Footer */}
      <div className=" absolute bottom-4 left-[80px] text-center my-5 text-[#b8b7b7] font-medium">
        Roha Ahrue ©2023
      </div>
    </div>
  );
};

export default Navbar;

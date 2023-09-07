import React from "react";
import { SiOpsgenie } from "react-icons/si";

const Navbar = () => {
  return (
    <div className=" mx-10 my-8 felx flex-col justify-center items-center">
      <div className=" font-LexendDeca text-[#F5F5F5] font-semibold text-[30px] flex items-center gap-3">
        <span className=" text-red-600 text-[35px]">
          <SiOpsgenie />
        </span>
        Genius.Ai
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;

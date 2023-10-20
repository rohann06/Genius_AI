import React from "react";
import LandingNavbar from "../components/LandingNavbar";
import LandingHero from "../components/LandingHero";
import LandingContent from "../components/LandingContent";

const LandingPage = () => {
  return (
    <div className=" h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <p className=" text-sm text-center -mt-12 text-[#b8b7b7] font-medium flex items-center justify-center gap-x-1">
        Made by
        <a href="https://rohan06.vercel.app/">
          <div className="  underline">Rohan Ahire ©2023</div>
        </a>
      </p>
    </div>
  );
};

export default LandingPage;

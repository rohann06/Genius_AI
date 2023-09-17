import NavOptionCard from "@/app/components/NavOptionCard";
import React from "react";
import {
  LuCode2,
  LuImage,
  LuMessageSquare,
  LuMusic,
  LuVideo,
} from "react-icons/lu";

const DashboardPage = () => {
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

  return (
    <div className=" mt-16 md:mt-24">
      <div className=" space-y-4 md:my-6 text-center">
        <h2 className=" text-2xl md:text-4xl font-bold  font-Rubik">
          Explore the power of AI
        </h2>
        <p className="  md:text-lg text-gray-400 font-Rubik">
          Embark on a journey to explore the incredible power of AI.
        </p>
      </div>
      <div className=" flex flex-col gap-y-5 md:gap-y-6 w-full mt-5 md:mt-10">
        {NavOptions.map((NavOption) => (
          <NavOptionCard
            icon={NavOption.icon}
            title={NavOption.title}
            link={NavOption.link}
            upprtDivStyle={NavOption.upprtDivStyle}
            iconStyle={NavOption.iconStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;

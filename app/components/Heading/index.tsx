"use client";
import React from "react";

interface HeadingProps {
  title: string;
  subtitle: string;
  icon: any;
  iconColor: string;
  iconBackground: string;
}
const Heading = ({
  title,
  subtitle,
  icon,
  iconColor,
  iconBackground,
}: HeadingProps) => {
  return (
    <div className=" flex items-center md:gap-4 gap-2 mt-10 md:mt-2">
      <div className={iconBackground}>
        <div className={iconColor}>{icon}</div>
      </div>
      <div>
        <div className=" font-semibold md:text-lg">{title}</div>
        <div className=" text-sm text-slate-400 font-medium">{subtitle}</div>
      </div>
    </div>
  );
};

export default Heading;

"use client";
import { IconType } from "react-icons";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface NavOptionCardProps {
  title: string;
  link: string;
  icon: any;
  upprtDivStyle: string;
  iconStyle: string;
}

const NavOptionCard = ({
  title,
  link,
  icon,
  upprtDivStyle,
  iconStyle,
}: NavOptionCardProps) => {
  return (
    <Link href={link}>
      <div className=" flex justify-between items-center p-2 md:p-3 md:mx-40 rounded-xl shadow-md border hover:shadow-lg">
        <div className=" flex items-center gap-2">
          <div className={upprtDivStyle}>
            <div className={iconStyle}>{icon}</div>
          </div>
          <div className=" text-lg font-Rubik font-semibold">
            <p>{title}</p>
          </div>
        </div>
        <div className=" text-2xl">
          <FiArrowRight />
        </div>
      </div>
    </Link>
  );
};

export default NavOptionCard;

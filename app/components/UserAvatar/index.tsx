"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserButton } from "@clerk/nextjs";

const UerAvatar = () => {
  const { user } = useUser();
  console.log("user", user);
  return (
    <div>
      <UserButton />
    </div>
  );
};

export default UerAvatar;

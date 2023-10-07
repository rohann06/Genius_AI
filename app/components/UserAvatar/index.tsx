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
      <UserButton/>
      {/* <Avatar className="h-8 w-8">
        <AvatarImage src={user?.imageUrl} />
        <AvatarFallback>
          {user?.fullName?.charAt(0)}
          {user?.lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar> */}
    </div>
  );
};

export default UerAvatar;

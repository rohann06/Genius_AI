import React from "react";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";


const UerAvatar = () => {
  const { user } = useUser();
  return (
    <div>
      <Avatar className="h-8 w-8">
        <AvatarImage src={user?.imageUrl} />
        <AvatarFallback>
          {user?.fullName?.charAt(0)}
          {user?.lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UerAvatar;

import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const MobileNavbar = () => {
  return (
    <div className=" p-4">
      <Button>
        <Menu />
        <div className=" md:hidden block ml-2">
          <UserButton afterSignOutUrl="/" />
        </div>
      </Button>
    </div>
  );
};

export default MobileNavbar;

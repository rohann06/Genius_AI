import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import Navbar from "../Navbar";

const MobileNavbar = () => {
  return (
    <Sheet>
      <div className=" p-4">
        <Button>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <div className=" md:hidden block ml-3">
            <UserButton afterSignOutUrl="/" />
          </div>
        </Button>
      </div>
      <SheetContent side="left" className="p-0 bg-gray-800">
        <div className="  h-full inset-y-0 z-[80]">
          <Navbar />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;

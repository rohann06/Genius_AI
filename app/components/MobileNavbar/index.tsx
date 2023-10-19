import React from "react";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Navbar from "../Navbar";
import { getApiLimitCount } from "@/lib/api-limit";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const MobileNavbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <Sheet>
      <div className=" p-4">
        <div className=" flex items-center">
          <SheetTrigger>
            <div className=" bg-gray-200 p-1 rounded-lg">
              <Menu />
            </div>
          </SheetTrigger>
          <div className=" md:hidden block ml-3">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
      <SheetContent side="left" className="p-0 bg-gray-800">
        <div className="  h-full inset-y-0">
          <Navbar apiLimitCount={apiLimitCount} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;

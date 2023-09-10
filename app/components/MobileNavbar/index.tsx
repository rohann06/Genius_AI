import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const MobileNavbar = () => {
  return (
    <div className=" p-4">
      <Button>
        <Menu />
      </Button>
    </div>
  );
};

export default MobileNavbar;

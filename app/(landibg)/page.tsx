import Link from "next/link";
import React from "react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div>
      LandingPage (unprotected)
      <div>
        <Link href={"sign-in"}>
          <Button>Login</Button>
        </Link>
        <Link href={"sign-up"}>
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

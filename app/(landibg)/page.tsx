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
          <button>Login</button>
        </Link>
        <Link href={"sign-up"}>
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

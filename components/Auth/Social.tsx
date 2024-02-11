"use client";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={"lg"}
        className="w-full"
        value={"outline"}
        onClick={() => console.log("Google")}
      >
        <FcGoogle />
      </Button>
      <Button
        size={"lg"}
        className="w-full"
        value={"outline"}
        onClick={() => console.log("Google")}
      >
        <FaGithub />
      </Button>
    </div>
  );
};

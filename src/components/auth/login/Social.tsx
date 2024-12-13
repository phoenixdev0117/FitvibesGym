"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Button } from "@/components/shadcn/ui/button";

export const Social = () => {

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "instagram") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  }

  
  return (
    <div className=" flex items-center w-full gap-x-2  ">
      <Button
        size={"lg"}
        className=" w-full"
        variant={"outline"}
        onClick={() => onClick('google')}
      >
        <FcGoogle className=" h-5 w-5 mr-2" />
        Google
      </Button>
      {/**<Button
        size={"lg"}
        className=" w-full"
        variant={"outline"}
        onClick={() => onClick('instagram')}
      >
        <FaInstagram className=" h-5 w-5" />
      </Button> */}
    </div>
  );
};

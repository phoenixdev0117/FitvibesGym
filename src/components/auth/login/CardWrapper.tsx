"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/shadcn/ui/card";
import { Header } from "@/components/auth/ui/Header";
import { Social } from "./Social";
import { BackButton } from "../ui/BackButton";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  buttonRegister?: boolean;
}

export const CardWrapper = ({
  backButtonHref,
  backButtonLabel,
  children,
  headerLabel,
  showSocial,
  buttonRegister,

}: CardWrapperProps) => {
  return (
    
    <Card className=" w-[300px] md:w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      {buttonRegister && (
        
      <CardFooter>
      <BackButton
      
          label={backButtonLabel}
          href={backButtonHref}
      />
    </CardFooter>
      )}

    </Card>
  );
};

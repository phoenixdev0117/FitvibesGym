"use client";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConfirmEmailSchema } from "@/schemas/auth/ConfirmEmailSchema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
//import { SendEmailResetPassword } from "@/actions/auth/reset-password/send-email-reset-password";
import { CardWrapper } from "../login/CardWrapper";
import { FormError } from "@/components/ui/login/FormError";
import { FormSuccess } from "@/components/ui/login/FormSuccess";
import { Button } from "@/components/shadcn/ui/button";

export const ResetPasswordForm = () => {
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ConfirmEmailSchema>>({
    resolver: zodResolver(ConfirmEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ConfirmEmailSchema>) => {
    
    setError("");
    setSuccess("");
    startTransition(async () => {
      // SendEmailResetPassword(values).then((res) => {
      //   if (res?.error) {
      //     setError(res?.error);
      //   }
      //   if (res?.success){
      //     setSuccess(res?.success);
      //   }
      // })
    });
  };

  return (
    <CardWrapper
      headerLabel="Has olvidado tu contraseña?"
      backButtonHref="/auth/login"
      backButtonLabel="Volver a iniciar sesión"
      showSocial={false}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6 ">
          <div className=" space-y-4 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      id="email"
                      placeholder="ejemplo@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            className=" w-full "
            variant={"default"}
            disabled={isPending}
          >
            Enviar email de recuperación
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

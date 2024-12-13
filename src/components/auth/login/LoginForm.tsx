"use client";

import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { LoginSchema } from "@/schemas/auth/LoginSchema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { loginAction } from "@/actions/auth/login/login-actions";
import { CardWrapper } from "./CardWrapper";
import { Button } from "@/components/shadcn/ui/button";
import { FormError } from "@/components/ui/login/FormError";
import { FormSuccess } from "@/components/ui/login/FormSuccess";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "El email ya está registrado, inicia sesión con el proveedor"
      : "";

  const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      try {
        const res = await loginAction(values, callbackUrl);

        if (res?.error) {
          form.reset();
          setError(res.error);
        } else if (res?.success) {
          form.reset();
          setSuccess(res.success);
        } else if (res?.twoFactor) {
          setShowTwoFactor(true);
        }
      } catch {
        setError('Ocurrió un error inesperado');
      }
    });
  };

  return (
    <CardWrapper
      headerLabel="Bienvenido"
      backButtonHref="/auth/register"
      backButtonLabel="No tienes una cuenta? Regístrate"
      showSocial={false}
      buttonRegister={false}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {showTwoFactor ? (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="code">
                      Código de autenticación
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        id="code"
                        placeholder="123456"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
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
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Contraseña</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                          disabled={isPending}
                          id="password"
                          placeholder="*********"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            className="w-full"
            variant={"default"}
            disabled={isPending}
          >
            {showTwoFactor ? "Confirmar" : "Iniciar sesión"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

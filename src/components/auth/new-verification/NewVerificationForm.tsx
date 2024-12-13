"use client";

import { useSearchParams } from "next/navigation";
import { CardWrapper } from "../login/CardWrapper";
import { BeatLoader } from "react-spinners";
import { useCallback, useEffect, useState } from "react";
import { newVerificationEmail } from "@/actions/auth/new-verification/new-verification-email";
import { FormSuccess } from "@/components/ui/login/FormSuccess";
import { FormError } from "@/components/ui/login/FormError";

export const NewVerificationForm = () => {

  const [error, setError] = useState<string|undefined>();
  const [success, setSuccess] = useState<string|undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("No se ha proporcionado un token");
      return;
    }
     newVerificationEmail(token).then((response) => {
       if (response.error) {
         setError(response.error);
       } else {
         setSuccess(response.success!);
       }
     });
  }, [token,success,error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirmando tu correo electrónico"
      backButtonLabel="Volver a iniciar sesión"
      backButtonHref="/auth/login"
    >
      <div className=" flex flex-col items-center w-full justify-center gap-5 ">
        {!success && !error && <BeatLoader color="#eb3f60" />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;

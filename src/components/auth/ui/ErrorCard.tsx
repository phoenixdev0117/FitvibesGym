
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { CardWrapper } from "../login/CardWrapper"


const ErrorCard = () => {
  return (
    <CardWrapper
        headerLabel={'Oops! Algo salió mal'}
        backButtonLabel="Volver al inicio"
        backButtonHref="/auth/login"
    >
        <div className=" w-full items-center flex justify-center ">
        <ExclamationTriangleIcon className=" h-10 w-10 text-destructive" />
        </div>

    </CardWrapper>
  )
}

export default ErrorCard
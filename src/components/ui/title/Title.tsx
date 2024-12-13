import { titleFont } from "@/config/fonts";
import { ExtendedUser } from "../../../../next-auth";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
  user?:ExtendedUser
}

export const Title = ({ title, subtitle, className,user }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={` antialiased text-4xl font-semibold my-10 ${titleFont.className}`}
      >
        {title}
      </h1>
      
      

      {subtitle && <h3 className=" text-xl mb-5 ">{subtitle}</h3>}

      
      
    </div>
  );
};

export default Title;

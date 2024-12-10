import { Inter, Montserrat_Alternates } from "next/font/google";
import localfont from "next/font/local";

export const KommonSemiBoldIt = localfont({
  src: "../../public/fonts/KommonGrotesk-SemiBoldIt.woff2",
});
export const KommonSemiBold = localfont({
  src: "../../public/fonts/KommonGrotesk-SemiBold.woff2",
});
export const KommonExtraLight = localfont({
  src: "../../public/fonts/KommonGrotesk-ExtraLight.woff2",
});
export const KommonExtraBold = localfont({
  src: "../../public/fonts/KommonGrotesk-ExtraBold.woff2",
});



export const inter = Inter({ subsets: ["latin"] });
export const titleFont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "700"],
});

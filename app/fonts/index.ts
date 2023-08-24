import { Archivo, Poppins } from "next/font/google";

export const archivo = Archivo({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap"
});

export const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap"
});

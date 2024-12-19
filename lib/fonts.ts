import { Gabarito, Rubik, Public_Sans, Inter } from "next/font/google";
import LocalFont from "next/font/local";

export const gabarito = Gabarito({ subsets: ["latin"] });
export const rubik = Rubik({ subsets: ["latin"] });
export const publicSans = Public_Sans({ subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

import { Pacifico, Poppins, Roboto } from "next/font/google";

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

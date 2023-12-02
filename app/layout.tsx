import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { IReactNode } from "@/lib/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend / React developer",
  description: "Front-end / React developer, looking for a job",
};

export default function RootLayout({ children }: IReactNode) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend / React developer",
  description: "Front-end / React developer, looking for a job",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="container dark:bg-black bg-gradient-to-tl dark:from-black from-white dark:via-zinc-700/30 via-zinc-700/30 dark:to-black to-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

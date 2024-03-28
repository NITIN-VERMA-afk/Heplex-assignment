import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ThemeProvider } from "./Theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "heaxleap",
  description: "assingment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

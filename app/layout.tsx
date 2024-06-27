import Navbar2 from "@/components/Navbar2";
import { SideBar } from "@/components/SideBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <SideBar />
          <main className="flex-1 overflow-y-auto">
            <Navbar2 />
            <div className="bg-muted">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

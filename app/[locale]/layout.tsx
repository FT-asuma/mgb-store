import type { Metadata } from "next";
import "./globals.css";
import axios from "axios";
import Header from "./Components/header/Header";
import ReactReduxContext from "@/utils/Provider";

export const metadata: Metadata = {
  title: "MGB Store",
  description: "Generated by create next app",
  icons: "/icons/titleIcon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API}/api`;
  return (
    <ReactReduxContext>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ReactReduxContext>
  );
}

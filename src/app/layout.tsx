import { Metadata } from "next";
import { ReactNode } from "react";
import ClientLayout from "./ClientLayout";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Disney Fan Site",
  description: "Search for Disney Characters and view details",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full h-full relative py-8 px-[7.5rem]">
          <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import localFont from "next/font/local";
import { ReactNode } from "react";
import Header from "./components/Header"; // Header can have Links or Router
import Footer from "./components/Footer"; // Footer can have Links
import "../styles/globals.css";
import { CharacterProvider } from "./providers/CharacterProvider";

// ShadCN fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const queryClient = new QueryClient();

/**
 * ClientLayout component that wraps its children with necessary providers and layout components.
 *
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The child components to be rendered within the layout.
 *
 * @returns {JSX.Element} The rendered ClientLayout component.
 *
 * This component includes:
 * - QueryClientProvider: Provides React Query context.
 * - CharacterProvider: Provides character-related context.
 * - Header: The header component.
 * - Footer: The footer component.
 * - ReactQueryDevtools: Developer tools for React Query.
 *
 * The layout also applies custom fonts and antialiasing.
 */
export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>

      <div className={`${geistSans.variable} ${geistMono.variable} antialiased font-lato`}>
        <CharacterProvider>
          <Header />
          {children}
          <Footer />
        </CharacterProvider>
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

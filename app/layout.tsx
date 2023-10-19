import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Promodel from "./components/Promodel";
import ToastProvider from "@/providers/toast-provider";
import CrispProvider from "@/providers/crisp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius",
  description: "AI SAAS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <>
            <Promodel />
            {children}
            <ToastProvider />
          </>
        </body>
      </html>
    </ClerkProvider>
  );
}

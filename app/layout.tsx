import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual CR",
  description: "Virtual CR Academic Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
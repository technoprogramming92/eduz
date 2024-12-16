import type { Metadata } from "next";
import "./globals.css";
import { Rethink_Sans } from "next/font/google";

const inter = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EduZ",
  description: "Next Generation School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

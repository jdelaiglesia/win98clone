import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const windowsRegularFont = localFont({
  src: "./fonts/WindowsRegular.woff2",
  variable: "--font-windows-regular",
  weight: "*",
});

export const metadata: Metadata = {
  title: "Windows 98 Clone",
  description: "Created by Joaquin de la Iglesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${windowsRegularFont.variable}`}>{children}</body>
    </html>
  );
}

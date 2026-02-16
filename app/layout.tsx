import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mostafa Kamar",
  description: "Full‑Stack Developer · Medical Student · EdTech Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

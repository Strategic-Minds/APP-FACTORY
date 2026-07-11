import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Concrete Polishing",
  description: "Premium polished concrete and epoxy flooring contractor presentation app.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

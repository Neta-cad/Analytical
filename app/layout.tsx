import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Analytical — Where Tech Talent Meets Opportunity",
  description: "The #1 platform for data analysts, developers, cybersecurity experts and all tech professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
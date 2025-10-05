import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lunyco - Portfolio",
  description: "Showcasing my work and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased scroll-smooth">
        {children}
      </body>
    </html>
  );
}

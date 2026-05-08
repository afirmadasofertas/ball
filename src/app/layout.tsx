import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "adidas Product Page",
  description: "Replica study of an adidas product page header and menu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="yarn">{children}</body>
    </html>
  );
}

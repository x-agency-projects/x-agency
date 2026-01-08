import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X Agency | Agence Digitale Premium",
  description:
    "Nous transformons vos idées en expériences digitales exceptionnelles. Stratégie, design et développement au service de votre croissance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-primary-dark`}>
        <Header />
        <main className="min-h-screen bg-primary-dark">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

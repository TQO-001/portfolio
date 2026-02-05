import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thulani Langa - IT Engineer Portfolio",
  description: "Showcasing the skills and projects of Thulani Langa, an IT Engineer specializing in digital infrastructure and full-stack development. Explore my tech stack, systems expertise, and connect with me on GitHub.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-[#050505] antialiased`}>
        {children}
      </body>
    </html>
  );
}
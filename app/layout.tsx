import "./globals.css";
import { Inter } from "next/font/google";
// import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GitHub",
  description: "Top notch GitHub landing page by JKV21",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* <Navbar/> */}
        {children}
      </body>
    </html>
  );
}

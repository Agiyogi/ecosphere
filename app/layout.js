import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoSphere Harmony",
  description: "A dynamic utility system optimizing community welfare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-blue-200 to-green-200`}
      >
        {children}
      </body>
    </html>
  );
}

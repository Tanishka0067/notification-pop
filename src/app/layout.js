import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digilabs assessment",
  description: "A simple notification poper",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
      <link rel="manifest" href="/site.webmanifest.json" />
    
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}

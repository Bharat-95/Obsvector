import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu", 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Obsvector",
  description: "Your path to IT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

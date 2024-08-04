import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/components/context/Auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BNM App",
  description: "Application BNM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}

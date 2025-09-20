import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ToastContext from "./context/toast-context";
import ActiveSectionContextProvider from "./context/section-context";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Prashant",
  description: "Portfolio website Prashant Timilsina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth text-slate-500 dark:bg-slate-900">
      <body
        className={` ${outfit.className} min-h-screen text-gray-50 flex flex-col items-center justify-center overflow-x-hidden w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            <Navbar />
            <ToastContext />
            <main className="mb-40 mt-40 flex w-full max-w-[1000px] flex-col gap-32 px-4">
              {children}
            </main>
            <Footer />
          </ActiveSectionContextProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

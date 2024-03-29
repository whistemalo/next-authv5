import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import { NextUIProviders } from "@/provider/NextUI";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Checklist",
  description: "Sistema de evalucion de puntos criticos de control",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
 
    lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextUIProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextUIProviders>
      </body>
    </html>
  );
}

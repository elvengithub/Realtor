import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../src/style.css";
import { ThemeProvider } from "../src/context/ThemeContext";
import { AccessibilityProvider } from "../src/context/AccessibilityContext";
import { AuthProvider } from "../src/context/AuthContext";
import RootLayoutClient from "./RootLayoutClient";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Anthony Gerard Orais Leuterio | Global Real Estate Coaching Platform",
  description: "High-performance real estate coaching and training platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className={outfit.className} suppressHydrationWarning>
        <AuthProvider>
          <ThemeProvider>
            <AccessibilityProvider>
              <RootLayoutClient>{children}</RootLayoutClient>
            </AccessibilityProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

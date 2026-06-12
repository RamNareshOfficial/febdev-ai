import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/components/providers/query-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FebDev-AI",
  description: "Portfolio of Ram Naresh, a Front End Developer building scalable web experiences with Next.js, React, MongoDB, Node.js, and modern web technologies. AI Productivity Dashboard",
  keywords: [
    "Ram Naresh",
    "Front End Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ram Naresh" }],
  creator: "Ram Naresh",
  openGraph: {
    title: "Ram Naresh | Front End Developer",
    description:
      "Scalable Front End web experiences with Next.js, React, and modern technologies.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <QueryProvider>
          <ThemeProvider>
            {children}
            <Toaster richColors position="top-right" />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
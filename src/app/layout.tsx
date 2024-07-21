import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Banner from "./(dashboard)/_components/banner";
import { dark } from "@clerk/themes";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crowd Funding",
  description:
    "Crowdfunding platform that allows individuals to discover, support, and contribute to innovative projects and causes. Our mission is to empower creators and bring their ideas to life with the support of a passionate community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <head>
          <link rel="icon" href="/logosaas.png" />
        </head>
        <body className={cn(dmSans.className, "antialiased")}>
          <Banner />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeSelect } from "@/components/theme/theme-select";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "shadcn/ui - Big Calendar Styles",
  description: "Big Calendar Styles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        <Analytics />
        <TooltipProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <nav className="w-full py-4 border-b mb-4">
              <div className="container flex justify-between items-center">
                <h1 className="text-lg">Shadcn/ui - Big Calendar Styles</h1>
                <ThemeSelect />
              </div>
            </nav>
            {children}
            <footer className="w-full py-4 border-t mt-auto">
              <div className="container flex justify-between">
                <p>
                  &copy; {new Date().getFullYear()}{" "}
                  <Link href="https://jonas-list.vercel.app/">Jonas List</Link>
                </p>
                <p>
                  <Link
                    href="https://jquense.github.io/react-big-calendar/examples/index.html?path=/story/about-big-calendar--page"
                    className="mr-2"
                  >
                    Original Big Calendar
                  </Link>
                  |
                  <Link href="https://ui.shadcn.com/" className="ml-2">
                    Shadcn/ui
                  </Link>
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}

import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

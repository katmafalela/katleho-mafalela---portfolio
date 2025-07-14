
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/orbitron/400.css';
import '@fontsource/orbitron/500.css';
import '@fontsource/orbitron/700.css';
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Chatbot from "@/components/Chatbot";
import { personalInfo } from "@/constants";

export const metadata: Metadata = {
  title: "Katleho Mafalela - Portfolio",
  description: "A personal portfolio website for Katleho Mafalela, a Full Stack Developer, showcasing skills, experience, and projects with a classy, minimalistic, and sci-fi-inspired design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-white dark:bg-gray-900">
        <ThemeProvider>
            <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen selection:bg-teal-400 selection:text-gray-900">
                <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800 -z-10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-5 dark:opacity-5" style={{backgroundImage: "url('/stardust.png')"}}></div>
                
                <Header />
                <main className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
                  {children}
                </main>
                <Footer personalInfo={personalInfo} />

                <Chatbot />
                <ScrollToTop />
            </div>
        </ThemeProvider>
         <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            // Set theme on initial load to prevent flash of wrong theme
            (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import '@/styles/globals.css';
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from 'next-intl';
import MarketPlaceNavbar from "@/ui/components/navbar";
import Footer from "@/ui/components/footer";




export const metadata: Metadata = {
  title: "Tejang",
  description: "Tejang bot",
   icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Locale tekshiruvi
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'en' | 'ru' | 'uz')) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
  <body className="flex flex-col min-h-screen justify-between relative z-0">

        <NextIntlClientProvider locale={locale}>
          <main className="flex-1 flex flex-col">
              
            <MarketPlaceNavbar />
            {children}
            <Footer/>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

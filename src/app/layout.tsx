import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GS Consulting | Site Web & Application sur Mesure pour TPE/PME",
  description:
    "Création de sites internet vitrines modernes, refonte de sites web, développement d'applications métier et automatisation de tâches pour TPE et PME en France. Votre projet livré rapideme[...]
  keywords: [
    "développement web",
    "site vitrine",
    "refonte de site",
    "application métier",
    "logiciel sur mesure",
    "automatisation de tâches",
    "TPE PME",
    "GS Consulting",
    "création de site internet France",
  ],
  authors: [{ name: "GS Consulting" }],
  creator: "GS Consulting",
  publisher: "GS Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "GS Consulting | Site Web & Logiciel sur Mesure pour TPE & PME",
    description:
      "Boostez votre activité avec un site professionnel livré rapidement ou des outils sur-mesure. Validation de votre projet avant le paiement final.",
    url: "https://www.gs-consulting.fr",
    siteName: "GS Consulting",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G6Y8PGHCCS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G6Y8PGHCCS');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/common/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageLoader from "@/components/ui/PageLoader";
import PageTransition from "@/components/ui/PageTransition";
import AuroraBackground from "@/components/ui/AuroraBackground";
import BackToTop from "@/components/ui/BackToTop";
import { ActiveSectionProvider } from "@/components/context/ActiveSectionContext";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vinodgowdag.com"),

  title: {
    default: "Vinodgowda G | Creative Designer & Website Developer",
    template: "%s | Vinodgowda G",
  },

  description:
    "Portfolio of Vinodgowda G – Creative Designer, Website Developer, Branding Expert and Digital Marketing Specialist from Karnataka, India.",

  keywords: [
    "Vinodgowda G",
    "Portfolio",
    "Website Developer",
    "Next.js Developer",
    "React Developer",
    "Graphic Designer",
    "UI UX Designer",
    "Branding",
    "Digital Marketing",
    "SEO",
    "Social Media Marketing",
    "Karnataka",
    "India",
  ],

  authors: [
    {
      name: "Vinodgowda G",
      url: "https://vinodgowdag.com",
    },
  ],

  creator: "Vinodgowda G",

  publisher: "Vinodgowda G",

  category: "Portfolio",

  openGraph: {
    title: "Vinodgowda G Portfolio",

    description:
      "Creative Designer • Website Developer • Branding & Digital Marketing Specialist",

    url: "https://vinodgowdag.com",

    siteName: "Vinodgowda G",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vinodgowda G Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Vinodgowda G Portfolio",

    description:
      "Creative Designer • Website Developer • Branding Expert",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${space.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${space.variable} bg-[#030712] text-white antialiased`}
      >
        <AuroraBackground />

        <CustomCursor />

        <ScrollProgress />

        <ActiveSectionProvider>
          <PageLoader>
            <PageTransition>{children}</PageTransition>
          </PageLoader>
        </ActiveSectionProvider>

        <BackToTop />

        <Toaster
          richColors
          position="top-right"
          theme="dark"
        />
      </body>
    </html>
  );
}
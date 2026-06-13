import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://minimalsbyafroja.com"
  ),
  title: {
    default: "Minimals By Afroja | Premium Cake Shop Bangladesh",
    template: "%s | Minimals By Afroja",
  },
  description:
    "Order premium custom cakes, ice cream, and brownies in Bangladesh. Handcrafted with love by Minimals By Afroja. Birthday cakes, wedding cakes, and more.",
  keywords: [
    "cake shop Bangladesh",
    "custom cake Bangladesh",
    "birthday cake Bangladesh",
    "premium cake shop",
    "brownies Bangladesh",
    "ice cream Bangladesh",
    "Minimals By Afroja",
    "order cake online Bangladesh",
    "wedding cake Bangladesh",
    "handmade cake Bangladesh",
  ],
  authors: [{ name: "Minimals By Afroja" }],
  creator: "Minimals By Afroja",
  publisher: "Minimals By Afroja",
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://minimalsbyafroja.com",
    siteName: "Minimals By Afroja",
    title: "Minimals By Afroja | Premium Cake Shop Bangladesh",
    description:
      "Order premium custom cakes, ice cream, and brownies in Bangladesh. Handcrafted with love.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Minimals By Afroja - Premium Cake Shop Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minimals By Afroja | Premium Cake Shop Bangladesh",
    description:
      "Order premium custom cakes, ice cream, and brownies in Bangladesh.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#E8B4B8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

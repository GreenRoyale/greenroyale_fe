import "@/app/stylesheet/app.scss";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Royale",
  description: "Transforming waste into value",
  openGraph: {
    title: "Green Royale",
    description: "Transforming waste into value",
    url: "",
    siteName: "Green Royale",
    images: [
      {
        url: "/hero.jpeg",
        width: 1920,
        height: 1080,
      },
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 627,
      },
      {
        url: "/hero.jpeg",
        width: 1800,
        height: 1600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Royale",
    description: "Transforming waste into value",
    siteId: "",
    creator: "",
    creatorId: "",
    images: ["/hero.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

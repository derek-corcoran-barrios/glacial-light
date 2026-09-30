import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Glacial Light — Mythic Folk Metal",
    template: "%s — Glacial Light",
  },
  description:
    "Glacial Light is Derek Corcoran’s mythic folk-metal project: music shaped by migration, landscape, memory and belonging between cultures.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

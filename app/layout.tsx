import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ritik Tomar — Full-Stack Developer",
  description:
    "Full-stack developer from Madhya Pradesh, India passionate to build modern and scalable web products that ships.",
  openGraph: {
    title: "Ritik Tomar — Full-Stack Developer",
    description:
      "Full-stack developer from Madhya Pradesh, India passionate to build modern and scalable web products that ships.",
    url: "https://github.com/ritiktomar10x",
    siteName: "Ritik Tomar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <style>{`
          html { scrollbar-color: #3c4255 #252938; scrollbar-width: thin; }
          ::-webkit-scrollbar { width: 11px; height: 11px; }
          ::-webkit-scrollbar-track { background: #252938; }
          ::-webkit-scrollbar-thumb { background-color: #3c4255; border-radius: 6px; border: 2px solid #252938; }
          ::-webkit-scrollbar-thumb:hover { background-color: #4fdcc9; }
          .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
      </head>
      <body className="mx-auto max-w-4xl px-4 md:px-6 pb-16">
        <div className="crt-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Noto_Sans_KR, Sour_Gummy } from "next/font/google";
import "./globals.scss";

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bigs-Community",
  description: "Bigs Company Test Page By Kim Min Seung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${sourGummy.variable} ${notoSansKr.variable}`}>
        <div className="wrap">{children}</div>
      </body>
    </html>
  );
}

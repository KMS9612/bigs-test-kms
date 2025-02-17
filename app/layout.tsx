import type { Metadata } from "next";
import "./globals.scss";
import BodyComponents from "@/src/layouts/bodyComponents";

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
      <BodyComponents>{children}</BodyComponents>
    </html>
  );
}

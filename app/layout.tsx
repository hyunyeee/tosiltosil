import type { Metadata } from "next";
import "../styles/globals.css";
import { pretendard } from "@/styles/font";

export const metadata: Metadata = {
  title: "토실토실",
  description: "실시간 타이머를 이용한 목표 달성",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body className={`${pretendard.className} bg-gray-background`}>
        {children}
      </body>
    </html>
  );
}

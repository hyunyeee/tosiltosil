import type { Metadata } from "next";
import "../styles/globals.css";
import { pretendard } from "@/styles/font";
import { Providers } from "@/providers/Providers";
import OverlayRenderer from "@/components/overlay/OverlayRenderer";
import HeaderController from "@/components/commons/header/HeaderController";
import FooterController from "@/components/commons/footer/FooterController";

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
    <html lang="ko" className={`${pretendard.variable} `}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body
        className={`${pretendard.className} bg-gray-background mx-auto flex min-h-dvh w-full max-w-[430px] flex-col overflow-auto`}
      >
        <Providers>
          <div id="portal" />
          <OverlayRenderer />
          <HeaderController />
          {children}
          <FooterController />
        </Providers>
      </body>
    </html>
  );
}

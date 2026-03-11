import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "공간토리 — 오래 유지되는 맞춤 정리",
  description:
    "다시 어질러지지 않는 요요 없는 정리! 서울 여성 전문 집정리·수납 컨설팅 공간토리입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

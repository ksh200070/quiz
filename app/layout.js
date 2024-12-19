import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "@/component/navigation";

export const metadata = {
  title: "뚱이퀴즈 | 다양한 국가 관련 퀴즈 사이트",
  siteName: "뚱이퀴즈",
  description: "여행과 관련한 다양한 퀴즈를 풀 수 있는 퀴즈 사이트입니다.",
  icons: {
    icon: "/icon.png",
  },
  verification: {
    google: "3uv0AbNOsQ0kIus6fymovEbGkkI1JBXHW_VDpOIY_QA",
  },
  other: {
    "naver-site-verification": "e81e96413b9dd7d362260f5dc6812747d6f3ddb6",
  },
  openGraph: {
    title: "뚱이퀴즈",
    description: "뚱이퀴즈 사이트입니다.",
    images: "/opengraph-image.png",
  },
  url: "https://quiz-steel-ten.vercel.app",
  keyword: [
    "뚱이",
    "퀴즈",
    "게임",
    "퀴즈게임",
    "국기맞추기",
    "게임",
    "친구들",
    "점수",
  ],
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation></Navigation>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

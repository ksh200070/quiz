import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "뚱이 퀴즈 게임 | 다양한 국가 관련 퀴즈 사이트",
  description: "여행과 관련한 다양한 퀴즈를 풀 수 있는 퀴즈 사이트입니다.",
  icons: {
    icon: "/icon.png",
  },
  verification: {
    google: "3uv0AbNOsQ0kIus6fymovEbGkkI1JBXHW_VDpOIY_QA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/" className="selected">
            국기
            <img src="./icon_flag.png" alt="" />
          </Link>
          <Link href="/list">수도</Link>
        </div>

        {children}
        <Analytics />
      </body>
    </html>
  );
}

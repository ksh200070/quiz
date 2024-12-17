import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
      </body>
    </html>
  );
}

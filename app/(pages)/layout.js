import Link from "next/link";
import style from "./globals.scss";
export const metadata = {
  title: "우진 블로그",
  description: "Next.js로 제작",
};

import { Nanum_Gothic } from "next/font/google";

const nanum = Nanum_Gothic({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={nanum.className}>
        <header>
          <h1>우진 블로그</h1>
          <Link href="/">홈</Link>
          <Link href="/algo">알고리즘</Link>

        </header>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const m_plus = M_PLUS_Rounded_1c({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "住宅の傷を補修するならグッドリペア大分 | Good Repair Oita | 大分市、別府市を中心に活動するリペア業者",
  description: "生活しているうちに、フローリングやドア、家具などにキズが入ってしまった。そんな時にリペア技術を利用してみませんか？大分市、別府市は無料です。それ以外は、JR大分駅を起点としてガソリン代1km当たり50円と高速道路利用時は高速道路代を加算させていただきます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={m_plus.className}>{children}</body>
    </html>
  );
}

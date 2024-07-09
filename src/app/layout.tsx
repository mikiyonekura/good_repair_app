import type { Metadata } from "next";
import { Inter, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const m_plus = M_PLUS_Rounded_1c({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "大分の補修工事ならGOOD REPAIR",
  description: "company of repair",
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

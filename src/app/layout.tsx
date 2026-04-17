import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalNav } from "@/components/GlobalNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "異世界社長（仮）モック",
  description: "異世界傭兵会社の経営シミュレーション 企画書替わりプロトタイプ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-900 text-stone-100">
        <GlobalNav />
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="text-center text-[10px] text-stone-500 py-2 border-t border-stone-800">
          異世界社長（仮）モック ／ 合意形成用プロトタイプ ／ プレースホルダー素材
        </footer>
      </body>
    </html>
  );
}

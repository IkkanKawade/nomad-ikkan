import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI海外ノマド | AI活用で自由な働き方を実現',
  description: 'AIを活用して海外ノマドになるための情報をまとめたサイト。YouTube動画、AI開発ポートフォリオ、Kindle本の紹介など。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meta Marc - Social Media Marketing Agency",
  description:
    "Transform your social media presence with Meta Marc. Expert social media management, influencer marketing, and content creation services.",
  keywords:
    "social media marketing, digital marketing, influencer marketing, content creation, social media management",
  authors: [{ name: "Meta Marc Agency" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

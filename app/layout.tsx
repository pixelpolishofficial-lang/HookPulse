import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "HookPulse - AI-Powered Video Optimization",
  description:
    "Upload videos, get retention heatmaps, AI-generated titles, chapters, captions, and viral insights. Built for YouTube/TikTok creators.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

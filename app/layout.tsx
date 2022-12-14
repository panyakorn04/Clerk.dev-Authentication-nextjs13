import './globals.css'
import { Inter } from '@next/font/google';
import { ClerkProvider } from "@clerk/nextjs/app-beta";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider >
      <html lang="en" className={inter.className}>
        <head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { Toaster } from 'sonner'
import ConvexClerkProvider from '@/providers/ConvexClerkProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Podcastr',
  description: 'Generate your podcasts using AI.',
  icons: {
    icon: '/icons/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ConvexClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={`${inter.className} ${'theme-orange'}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster richColors position="bottom-right" />

            {children}
          </ThemeProvider>
        </body>
      </html>
    </ConvexClerkProvider>
  )
}

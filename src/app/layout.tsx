import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Event Dashboard',
  description: 'Track and manage your events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main text-white`}>
        <div className="flex">
          <aside className="sticky top-0 h-screen w-64 border-r border-[#424242] overflow-y-auto">
            <nav className="bg-nav-bg h-full">
              <Sidebar />
            </nav>
          </aside>
          <main className="flex-1 p-8 bg-main">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
import { ThemeProvider } from '@/components/app-theme/ThemeProvider';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import SidebarMenu from '@/components/sidebar-menu/SidebarMenu';
import Footer from '@/components/footer/Footer';
import './globals.css';

const inter = Poppins({ subsets: ['latin'], weight: ['400','600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'My portfolio',
  description: 'Home page of my portfolio',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className + ` min-h-screen flex flex-col dark:bg-slate-900 relative`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarMenu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

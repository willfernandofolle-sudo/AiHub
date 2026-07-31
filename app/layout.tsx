import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'AI Hub — I Migliori Strumenti di IA',
    description:
        'Scopri e accedi ai principali strumenti di intelligenza artificiale sul mercato, organizzati per categoria. Esclusivo per gli studenti del corso.',
    keywords: ['intelligenza artificiale', 'IA', 'strumenti IA', 'AI tools', 'Midjourney', 'ChatGPT', 'Claude', 'Runway'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="it" className={inter.variable}>
            <body className="antialiased font-sans">{children}</body>
        </html>
    )
}

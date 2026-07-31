import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['400', '500', '600', '700'],
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
        <html lang="it" className={poppins.variable}>
            <body className="antialiased font-sans">{children}</body>
        </html>
    )
}

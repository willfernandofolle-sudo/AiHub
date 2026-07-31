import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'AI Hub — As Melhores Ferramentas de IA',
    description:
        'Descubra e acesse as principais ferramentas de inteligência artificial do mercado, organizadas por categoria. Exclusivo para alunos do curso.',
    keywords: ['inteligência artificial', 'IA', 'ferramentas IA', 'AI tools', 'Midjourney', 'ChatGPT', 'Claude', 'Runway'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={inter.variable}>
            <body className="antialiased font-sans">{children}</body>
        </html>
    )
}

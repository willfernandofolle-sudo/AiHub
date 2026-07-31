import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-5 h-[60px] flex items-center justify-between gap-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
                    <span
                        className="w-8 h-8 rounded-[10px] flex items-center justify-center text-sm font-bold text-white select-none"
                        style={{
                            background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                            boxShadow: '0 0 18px rgba(124,58,237,0.55)',
                        }}
                    >
                        ✦
                    </span>
                    <span className="text-base font-bold tracking-tight">
                        AI&nbsp;<span className="text-glow-accent">Hub</span>
                    </span>
                </Link>

                {/* Nav links */}
                <nav className="hidden md:flex items-center gap-0.5">
                    {['Ferramentas', 'Categorias'].map((label) => (
                        <a
                            key={label}
                            href={`#${label.toLowerCase()}`}
                            className="px-3.5 py-2 text-sm text-white/50 hover:text-white transition-colors rounded-xl hover:bg-white/[0.06]"
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                {/* Badge */}
                <div className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-medium text-white/50 flex-shrink-0">
                    ✦&nbsp;Exclusivo para alunos
                </div>

            </div>
        </header>
    )
}

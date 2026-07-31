import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-5 h-[60px] flex items-center justify-center gap-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
                    <span
                        className="w-8 h-8 rounded-[10px] flex items-center justify-center text-sm font-bold text-white select-none"
                        style={{
                            background: 'linear-gradient(135deg, #f5f5f5, #6b7280)',
                            boxShadow: '0 0 18px rgba(255,255,255,0.18)',
                        }}
                    >
                        ✦
                    </span>
                    <span className="text-base font-bold tracking-tight">
                        AI&nbsp;<span className="text-glow-accent">Hub</span>
                    </span>
                </Link>

            </div>
        </header>
    )
}

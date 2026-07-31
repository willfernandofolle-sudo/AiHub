import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-5 h-[60px] flex items-center justify-center gap-10 lg:gap-14">

                {/* Logo */}
                <Link href="/" className="flex items-baseline gap-3 flex-shrink-0">
                    <span className="text-base font-bold tracking-tight text-white">
                        AI <span className="text-glow-accent">Hub</span>
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/48">
                        by william folle
                    </span>
                </Link>

                <p className="hidden md:block text-sm text-white/68 tracking-wide">
                    Una collezione AI con presenza scenica.
                </p>

            </div>
        </header>
    )
}

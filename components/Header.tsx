import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-5 h-[60px] grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">

                <Link href="/" className="justify-self-start whitespace-nowrap">
                    <span className="text-base font-bold tracking-tight text-white">
                        AI <span className="text-glow-accent">Hub</span>
                    </span>
                </Link>

                <p className="text-[11px] md:text-sm text-white/68 tracking-wide text-center whitespace-nowrap">
                    Una collezione di AI per semplificare la tua vita.
                </p>

                <span
                    className="justify-self-end text-sm md:text-base text-white/78 leading-none whitespace-nowrap"
                    style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
                >
                    By William Fernando Folle
                </span>

            </div>
        </header>
    )
}

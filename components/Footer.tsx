export default function Footer() {
    return (
        <footer className="border-t border-white/[0.055] py-12 px-5">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

                <div className="flex items-center gap-2.5">
                    <span
                        className="w-6 h-6 rounded-lg text-xs flex items-center justify-center font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #f5f5f5, #52525b)' }}
                    >
                        ✦
                    </span>
                    <span className="text-sm text-white/30">
                        AI Hub — Esclusivo per gli studenti del corso di IA
                    </span>
                </div>

                <p className="text-xs text-white/15 text-center">
                    Link a strumenti di terze parti. Usali con responsabilita.
                </p>

            </div>
        </footer>
    )
}

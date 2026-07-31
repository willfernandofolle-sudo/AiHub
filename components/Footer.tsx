export default function Footer() {
    return (
        <footer className="border-t border-white/[0.055] py-12 px-5">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

                <div className="flex items-center gap-2.5">
                    <span
                        className="w-6 h-6 rounded-lg text-xs flex items-center justify-center font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}
                    >
                        ✦
                    </span>
                    <span className="text-sm text-white/30">
                        AI Hub — Exclusivo para alunos do curso de IA
                    </span>
                </div>

                <p className="text-xs text-white/15 text-center">
                    Links para ferramentas de terceiros. Acesse com responsabilidade.
                </p>

            </div>
        </footer>
    )
}

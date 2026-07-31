const stats = [
    { value: '30+', label: 'Ferramentas' },
    { value: '7', label: 'Categorias' },
    { value: '100%', label: 'Curado' },
]

export default function Hero() {
    return (
        <section className="relative pt-36 pb-16 px-6 text-center">
            <div className="max-w-4xl mx-auto">

                {/* Eyebrow pill */}
                <div className="inline-flex items-center gap-2 glass-pill px-4 py-2 rounded-full text-xs font-medium text-white/50 mb-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                    Curado e atualizado para você
                </div>

                {/* Headline */}
                <h1 className="font-black tracking-tight leading-[0.92] mb-7 select-none">
                    <span className="block text-[clamp(3rem,9vw,6.5rem)] text-glow">
                        As melhores
                    </span>
                    <span className="block text-[clamp(3rem,9vw,6.5rem)] text-glow-accent">
                        ferramentas de IA
                    </span>
                    <span className="block text-[clamp(3rem,9vw,6.5rem)] text-glow">
                        do mercado
                    </span>
                </h1>

                {/* Sub */}
                <p className="text-[clamp(1rem,2.5vw,1.2rem)] text-white/40 font-light max-w-xl mx-auto mb-14 leading-relaxed">
                    Tudo que você precisa para dominar a inteligência artificial,
                    organizado por categoria para encontrar exatamente o que precisa.
                </p>

                {/* Stat pills */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className="glass-pill px-7 py-3.5 rounded-2xl text-center"
                        >
                            <div className="text-2xl font-black text-white leading-none">{s.value}</div>
                            <div className="text-[10px] text-white/35 uppercase tracking-[0.15em] mt-1">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div className="mt-16 flex justify-center">
                    <a
                        href="#categorias"
                        className="text-white/20 hover:text-white/50 transition-colors flex flex-col items-center gap-2 group"
                    >
                        <span className="text-xs tracking-widest uppercase">Explorar</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    )
}

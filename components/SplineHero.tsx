import Spline from '@splinetool/react-spline/next'

export default function SplineHero() {
    return (
        <section className="relative min-h-[100svh] overflow-hidden pt-[60px]">
            <div className="absolute inset-0 top-[60px]">
                <Spline scene="https://prod.spline.design/Zblh5AIAIbAUWx05/scene.splinecode" />
            </div>

            <div className="absolute inset-0 top-[60px] hero-surface" />

            <div className="relative z-10 flex min-h-[calc(100svh-60px)] items-end">
                <div className="max-w-7xl mx-auto w-full px-5 pb-10 sm:pb-14 lg:pb-20">
                    <div className="max-w-3xl space-y-5">
                        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/8 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/72 backdrop-blur-xl">
                            Esperienza immersiva
                        </span>

                        <div className="space-y-4">
                            <h1 className="text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-white text-balance">
                                Una collezione AI con presenza scenica.
                            </h1>
                            <p className="max-w-2xl text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-white/72 text-pretty">
                                Il nuovo spazio introduttivo rende il modello 3D parte del linguaggio visivo del sito, con toni profondi, riflessi morbidi e un ingresso piu sofisticato.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2 text-sm text-white/78">
                            <a
                                href="#strumenti"
                                className="inline-flex items-center rounded-full bg-white px-5 py-3 font-medium text-[#07111f] shadow-[0_16px_40px_rgba(255,255,255,0.16)] transition-transform hover:-translate-y-0.5"
                            >
                                Esplora strumenti
                            </a>
                            <span className="inline-flex items-center rounded-full border border-white/16 bg-white/6 px-5 py-3 backdrop-blur-xl">
                                Curato per creativita, automazione e sviluppo
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import Spline from '@splinetool/react-spline/next'

export default function SplineHero() {
    return (
        <section className="relative px-5 pt-24 pb-8">
            <div className="max-w-7xl mx-auto">
                <div className="glass-card rounded-[32px] overflow-hidden border border-black/10 shadow-[0_24px_60px_rgba(10,10,10,0.08)]">
                    <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-black/8 bg-white/80">
                        <div>
                            <p className="text-[11px] uppercase tracking-[0.24em] text-black/35">
                                Esperienza 3D
                            </p>
                            <h1 className="text-lg sm:text-xl font-semibold text-black">
                                Esplora AI Hub all&apos;ingresso del sito
                            </h1>
                        </div>
                        <span className="hidden sm:inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-xs text-black/55 bg-white">
                            Interattivo
                        </span>
                    </div>

                    <div className="h-[420px] sm:h-[520px] lg:h-[620px] bg-white">
                        <Spline scene="https://prod.spline.design/NxEY9ErC5ujHT2zS/scene.splinecode" />
                    </div>
                </div>
            </div>
        </section>
    )
}
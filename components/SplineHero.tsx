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
                        <div className="space-y-4">
                            <p className="max-w-2xl text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-white/72 text-pretty">
                                Una collezione AI con presenza scenica.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
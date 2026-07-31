import Spline from '@splinetool/react-spline/next'

export default function SplineHero() {
    return (
        <section className="relative h-[78svh] min-h-[520px] overflow-hidden pt-[60px] lg:h-[72svh]">
            <div className="absolute inset-0 top-[60px]">
                <Spline scene="https://prod.spline.design/Zblh5AIAIbAUWx05/scene.splinecode" />
            </div>

            <div className="absolute inset-0 top-[60px] hero-surface" />
        </section>
    )
}
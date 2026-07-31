import Background from '@/components/Background'
import Header from '@/components/Header'
import SplineHero from '@/components/SplineHero'
import ToolsGrid from '@/components/ToolsGrid'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <Background />
            <div className="relative z-10">
                <Header />
                <SplineHero />
                <ToolsGrid />
                <Footer />
            </div>
        </main>
    )
}

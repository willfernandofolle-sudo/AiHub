import CategoryIcon from './CategoryIcon'
import { Tool, categoryConfig } from '@/data/tools'

interface Props { tool: Tool }

const badgeStyle: Record<string, string> = {
    Gratis: 'bg-white text-black border border-black/10',
    Freemium: 'bg-stone-100 text-black/75 border border-black/10',
    'A pagamento': 'bg-black text-white border border-black',
}

export default function ToolCard({ tool }: Props) {
    const cat = categoryConfig[tool.category]

    return (
        <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-3xl p-5 flex flex-col gap-4 group"
        >
            {/* ── Top row ── */}
            <div className="flex items-start justify-between gap-2">

                {/* Minimal category icon */}
                <div
                    className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center flex-shrink-0 border border-black/10 bg-black text-white"
                    style={{
                        boxShadow: '0 12px 24px rgba(10,10,10,0.1)',
                    }}
                >
                    <CategoryIcon category={tool.category} className="h-5 w-5 stroke-[1.8]" />
                </div>

                {/* Badge */}
                <span className={`text-[11px] px-2.5 py-1 rounded-full font-semibold leading-none ${badgeStyle[tool.badge]}`}>
                    {tool.badge}
                </span>
            </div>

            {/* ── Body ── */}
            <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                    <h3 className="font-bold text-black text-[1.05rem] leading-tight">{tool.name}</h3>
                    {tool.featured && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-black text-white border border-black font-semibold">
                            Selezionato
                        </span>
                    )}
                </div>
                <p className="text-[13px] text-black/58 leading-relaxed line-clamp-3">
                    {tool.description}
                </p>
            </div>

            {/* ── Footer ── */}
            <div className="flex items-center justify-between pt-3 border-t border-black/[0.08]">
                <span className="text-[11px] text-black/45 flex items-center gap-1.5">
                    <CategoryIcon category={tool.category} className="h-3.5 w-3.5 stroke-[1.8]" />
                    {cat.label}
                </span>
                <span className="text-[13px] text-black/45 group-hover:text-black transition-colors flex items-center gap-1">
                    Apri
                    <svg
                        className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>
        </a>
    )
}

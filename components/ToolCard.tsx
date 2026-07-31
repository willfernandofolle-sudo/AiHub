import CategoryIcon from './CategoryIcon'
import { Tool, categoryConfig } from '@/data/tools'

interface Props { tool: Tool }

export default function ToolCard({ tool }: Props) {
    const cat = categoryConfig[tool.category]

    return (
        <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill rounded-3xl p-5 flex flex-col gap-4 group bg-white/[0.09] border-white/12 hover:bg-white/[0.14] hover:border-white/20"
        >
            {/* ── Top row ── */}
            <div className="flex items-center gap-3">

                <CategoryIcon category={tool.category} className="h-8 w-8 stroke-[1.8] text-white/88 flex-shrink-0" />

                <h3 className="font-bold text-white text-[1.1rem] leading-tight">{tool.name}</h3>
            </div>

            {/* ── Body ── */}
            <div className="flex-1 min-w-0">
                <p className="text-[13px] text-white/62 leading-relaxed line-clamp-3">
                    {tool.description}
                </p>
            </div>

            {/* ── Footer ── */}
            <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
                <span className="text-[11px] text-white/44 flex items-center gap-1.5">
                    <CategoryIcon category={tool.category} className="h-3.5 w-3.5 stroke-[1.8] text-white/70" />
                    {cat.label}
                </span>
                <span className="text-[13px] text-white/48 group-hover:text-white transition-colors flex items-center gap-1">
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

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
            className="glass-card rounded-3xl p-5 flex flex-col gap-4 group"
        >
            {/* ── Top row ── */}
            <div className="flex items-start gap-2">

                {/* Minimal category icon */}
                <div
                    className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/8 text-white"
                    style={{
                        boxShadow: '0 14px 26px rgba(2,6,23,0.22)',
                    }}
                >
                    <CategoryIcon category={tool.category} className="h-6 w-6 stroke-[1.8]" />
                </div>
            </div>

            {/* ── Body ── */}
            <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                    <h3 className="font-bold text-white text-[1.05rem] leading-tight">{tool.name}</h3>
                </div>
                <p className="text-[13px] text-white/60 leading-relaxed line-clamp-3">
                    {tool.description}
                </p>
            </div>

            {/* ── Footer ── */}
            <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
                <span className="text-[11px] text-white/42 flex items-center gap-1.5">
                    <CategoryIcon category={tool.category} className="h-3.5 w-3.5 stroke-[1.8]" />
                    {cat.label}
                </span>
                <span className="text-[13px] text-white/44 group-hover:text-white transition-colors flex items-center gap-1">
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

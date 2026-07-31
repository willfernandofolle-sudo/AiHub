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
            <div className="flex items-center gap-3">

                {/* Minimal category icon */}
                <div
                    className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/65 text-[#111318]"
                    style={{
                        boxShadow: '0 14px 30px rgba(0,0,0,0.22)',
                    }}
                >
                    <CategoryIcon category={tool.category} className="h-7 w-7 stroke-[1.8]" />
                </div>

                <h3 className="font-bold text-[#0f1115] text-[1.1rem] leading-tight">{tool.name}</h3>
            </div>

            {/* ── Body ── */}
            <div className="flex-1 min-w-0">
                <p className="text-[13px] text-[#1d212b]/80 leading-relaxed line-clamp-3">
                    {tool.description}
                </p>
            </div>

            {/* ── Footer ── */}
            <div className="flex items-center justify-between pt-3 border-t border-black/[0.09]">
                <span className="text-[11px] text-[#1d212b]/70 flex items-center gap-1.5">
                    <CategoryIcon category={tool.category} className="h-3.5 w-3.5 stroke-[1.8]" />
                    {cat.label}
                </span>
                <span className="text-[13px] text-[#1d212b]/75 group-hover:text-[#0b0d12] transition-colors flex items-center gap-1">
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

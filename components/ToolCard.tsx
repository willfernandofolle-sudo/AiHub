import { Tool, categoryConfig } from '@/data/tools'

interface Props { tool: Tool }

const badgeStyle: Record<string, string> = {
    Gratis: 'bg-white/[0.08] text-white/80 border border-white/15',
    Freemium: 'bg-zinc-200/10 text-zinc-200 border border-zinc-200/15',
    'A pagamento': 'bg-zinc-700/25 text-zinc-100 border border-zinc-500/25',
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

                {/* Emoji icon */}
                <div
                    className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(244,244,245,0.18), rgba(39,39,42,0.92))',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.35)',
                    }}
                >
                    <span className="grayscale opacity-90">{tool.emoji}</span>
                </div>

                {/* Badge */}
                <span className={`text-[11px] px-2.5 py-1 rounded-full font-semibold leading-none ${badgeStyle[tool.badge]}`}>
                    {tool.badge}
                </span>
            </div>

            {/* ── Body ── */}
            <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                    <h3 className="font-bold text-white text-[1.05rem] leading-tight">{tool.name}</h3>
                    {tool.featured && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.08] text-white/75 border border-white/15 font-semibold">
                            ✦ In evidenza
                        </span>
                    )}
                </div>
                <p className="text-[13px] text-white/45 leading-relaxed line-clamp-3">
                    {tool.description}
                </p>
            </div>

            {/* ── Footer ── */}
            <div className="flex items-center justify-between pt-3 border-t border-white/[0.055]">
                <span className="text-[11px] text-white/25 flex items-center gap-1">
                    <span className="grayscale opacity-80">{cat.emoji}</span>
                    {cat.label}
                </span>
                <span className="text-[13px] text-white/40 group-hover:text-white/80 transition-colors flex items-center gap-1">
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

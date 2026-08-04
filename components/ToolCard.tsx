"use client"

import { useState } from 'react'
import CategoryIcon from './CategoryIcon'
import { Tool, categoryConfig } from '@/data/tools'

interface Props { tool: Tool }

function getLogoUrl(url: string) {
    try {
        const domain = new URL(url).hostname.replace(/^www\./, '')
        return `https://logo.clearbit.com/${domain}`
    } catch {
        return ''
    }
}

export default function ToolCard({ tool }: Props) {
    const cat = categoryConfig[tool.category]
    const [logoError, setLogoError] = useState(false)
    const [logoLoaded, setLogoLoaded] = useState(false)
    const logoUrl = getLogoUrl(tool.url)

    return (
        <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill rounded-3xl p-5 flex flex-col gap-4 group bg-white/[0.09] border-white/12 hover:bg-white/[0.14] hover:border-white/20"
        >
            {/* ── Top row ── */}
            <div className="flex items-center gap-3">

                <div className="relative h-8 w-8 flex-shrink-0">
                    {!logoError && logoUrl && (
                        <img
                            src={logoUrl}
                            alt={`Logo ${tool.name}`}
                            className={[
                                'absolute inset-0 h-8 w-8 object-contain transition-opacity duration-200',
                                logoLoaded ? 'opacity-100' : 'opacity-0',
                            ].join(' ')}
                            loading="lazy"
                            onLoad={() => setLogoLoaded(true)}
                            onError={() => {
                                setLogoError(true)
                                setLogoLoaded(false)
                            }}
                        />
                    )}

                    {(!logoUrl || logoError || !logoLoaded) && (
                        <CategoryIcon category={tool.category} useCategoryColor className="h-8 w-8 stroke-[1.8]" />
                    )}
                </div>

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
                    <CategoryIcon category={tool.category} useCategoryColor className="h-3.5 w-3.5 stroke-[1.8]" />
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

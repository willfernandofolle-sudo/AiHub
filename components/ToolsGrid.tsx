'use client'

import { useState, useMemo } from 'react'
import { tools, Category } from '@/data/tools'
import CategoryFilter from './CategoryFilter'
import ToolCard from './ToolCard'

export default function ToolsGrid() {
    const [selected, setSelected] = useState<Category | 'todas'>('todas')

    const filtered = useMemo(() => {
        const list =
            selected === 'todas' ? tools : tools.filter((t) => t.category === selected)
        // Featured tools appear first
        return [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }, [selected])

    return (
        <section id="ferramentas" className="pb-28">

            {/* Category filter */}
            <div className="mb-8">
                <CategoryFilter selected={selected} onChange={setSelected} />
            </div>

            <div className="max-w-7xl mx-auto px-5 space-y-5">

                {/* Result count */}
                <p className="text-xs text-white/25 tracking-wide">
                    {filtered.length} {filtered.length === 1 ? 'ferramenta' : 'ferramentas'}
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filtered.map((tool) => (
                        <ToolCard key={tool.id} tool={tool} />
                    ))}
                </div>

            </div>
        </section>
    )
}

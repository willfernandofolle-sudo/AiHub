'use client'

import { categoryConfig, Category } from '@/data/tools'

interface Props {
    selected: Category | 'todas'
    onChange: (cat: Category | 'todas') => void
}

const ALL = { id: 'todas' as const, label: 'Todas', emoji: '✦' }

export default function CategoryFilter({ selected, onChange }: Props) {
    const cats = [
        ALL,
        ...Object.entries(categoryConfig).map(([id, c]) => ({
            id: id as Category,
            label: c.label,
            emoji: c.emoji,
        })),
    ]

    return (
        <div id="categorias" className="px-5 max-w-7xl mx-auto">
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
                {cats.map((cat) => {
                    const active = selected === cat.id
                    return (
                        <button
                            key={cat.id}
                            onClick={() => onChange(cat.id)}
                            className={[
                                'flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-medium',
                                'whitespace-nowrap flex-shrink-0 transition-all duration-200',
                                active
                                    ? 'bg-white/[0.14] border border-white/25 text-white shadow-lg'
                                    : 'glass-pill text-white/50 hover:text-white/80',
                            ].join(' ')}
                        >
                            <span className="text-base leading-none">{cat.emoji}</span>
                            <span>{cat.label}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

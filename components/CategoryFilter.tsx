'use client'

import CategoryIcon from './CategoryIcon'
import { categoryConfig, Category } from '@/data/tools'

interface Props {
    selected: Category | 'tutte'
    onChange: (cat: Category | 'tutte') => void
}

const ALL = { id: 'tutte' as const, label: 'Tutte' }

export default function CategoryFilter({ selected, onChange }: Props) {
    const cats = [
        ALL,
        ...Object.entries(categoryConfig).map(([id, c]) => ({
            id: id as Category,
            label: c.label,
        })),
    ]

    return (
        <div id="categorie" className="px-5 max-w-7xl mx-auto">
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
                                    ? 'bg-black text-white border border-black shadow-[0_12px_24px_rgba(10,10,10,0.14)]'
                                    : 'glass-pill text-black/65 hover:text-black',
                            ].join(' ')}
                        >
                            <CategoryIcon category={cat.id} className="h-4 w-4 stroke-[1.8]" />
                            <span>{cat.label}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

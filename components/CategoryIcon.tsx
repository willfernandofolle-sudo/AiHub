import { Briefcase, Code2, Film, Image, LayoutGrid, MessageSquareText, Music, User, type LucideIcon, type LucideProps } from 'lucide-react'
import { Category } from '@/data/tools'

const iconMap: Record<Category | 'tutte', LucideIcon> = {
    tutte: LayoutGrid,
    imagem: Image,
    video: Film,
    texto: MessageSquareText,
    codigo: Code2,
    audio: Music,
    produtividade: Briefcase,
    avatar: User,
}

const appleCategoryColors: Record<Category, string> = {
    imagem: '#2A6F8E',
    video: '#8C2F3E',
    texto: '#8A6E12',
    codigo: '#2F6A2C',
    audio: '#2F7C9F',
    produtividade: '#A1821A',
    avatar: '#A44657',
}

interface Props extends LucideProps {
    category: Category | 'tutte'
    useCategoryColor?: boolean
    className?: string
}

export default function CategoryIcon({ category, useCategoryColor = false, style, ...props }: Props) {
    const Icon = iconMap[category]

    const coloredStyle = useCategoryColor && category !== 'tutte'
        ? { color: appleCategoryColors[category], ...style }
        : style

    return <Icon {...props} style={coloredStyle} />
}
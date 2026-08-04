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
    imagem: '#0A344A',
    video: '#441320',
    texto: '#4B3D04',
    codigo: '#1F4013',
    audio: '#1A4D68',
    produtividade: '#66530A',
    avatar: '#5A2030',
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
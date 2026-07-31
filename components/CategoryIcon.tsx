import { Briefcase, Code2, Film, Image, LayoutGrid, MessageSquareText, Music, User, type LucideProps } from 'lucide-react'
import { Category } from '@/data/tools'

const iconMap: Record<Category | 'tutte', (props: LucideProps) => JSX.Element> = {
    tutte: LayoutGrid,
    imagem: Image,
    video: Film,
    texto: MessageSquareText,
    codigo: Code2,
    audio: Music,
    produtividade: Briefcase,
    avatar: User,
}

interface Props extends LucideProps {
    category: Category | 'tutte'
}

export default function CategoryIcon({ category, ...props }: Props) {
    const Icon = iconMap[category]
    return <Icon {...props} />
}
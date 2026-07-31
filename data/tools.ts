// ================================================================
// 🚀 COMO ADICIONAR NOVAS FERRAMENTAS
// 1. Copie um objeto do array `tools` abaixo
// 2. Altere os campos: id, name, description, url, category, emoji, gradient, badge
// 3. Salve o arquivo — a ferramenta aparecerá automaticamente no site
// ================================================================

export type Category =
    | 'imagem'
    | 'video'
    | 'texto'
    | 'codigo'
    | 'audio'
    | 'produtividade'
    | 'avatar';

export type Badge = 'Gratuito' | 'Freemium' | 'Pago';

export interface Tool {
    id: string;
    name: string;
    description: string;
    url: string;
    category: Category;
    emoji: string;
    gradient: string; // CSS gradient (ex: 'linear-gradient(135deg, #7c3aed, #2563eb)')
    badge: Badge;
    featured?: boolean;
}

export const categoryConfig: Record<
    Category,
    { label: string; emoji: string }
> = {
    imagem: { label: 'Imagem', emoji: '🎨' },
    video: { label: 'Vídeo', emoji: '🎬' },
    texto: { label: 'Texto & Chat', emoji: '✍️' },
    codigo: { label: 'Código', emoji: '💻' },
    audio: { label: 'Áudio & Música', emoji: '🎵' },
    produtividade: { label: 'Produtividade', emoji: '⚡' },
    avatar: { label: 'Avatar & Vídeo IA', emoji: '🧑‍💼' },
};

export const tools: Tool[] = [

    // ─────────────────────────────────────────
    // 🎨 IMAGEM
    // ─────────────────────────────────────────
    {
        id: 'midjourney',
        name: 'Midjourney',
        description: 'Crie imagens fotorrealistas e artísticas com prompts de texto. O padrão da indústria para criação visual com IA.',
        url: 'https://www.midjourney.com',
        category: 'imagem',
        emoji: '🎨',
        gradient: 'linear-gradient(135deg, #7c3aed, #db2777)',
        badge: 'Pago',
        featured: true,
    },
    {
        id: 'dalle3',
        name: 'DALL·E 3',
        description: 'Geração de imagens da OpenAI integrada ao ChatGPT Plus. Excelente para seguir instruções detalhadas com precisão.',
        url: 'https://openai.com/dall-e-3',
        category: 'imagem',
        emoji: '🖼️',
        gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
        badge: 'Freemium',
    },
    {
        id: 'ideogram',
        name: 'Ideogram',
        description: 'Especialista em criar imagens com texto integrado. Perfeito para logos, cartazes e designs tipográficos.',
        url: 'https://ideogram.ai',
        category: 'imagem',
        emoji: '💡',
        gradient: 'linear-gradient(135deg, #ea580c, #dc2626)',
        badge: 'Freemium',
    },
    {
        id: 'adobe-firefly',
        name: 'Adobe Firefly',
        description: 'IA generativa da Adobe integrada ao Photoshop e Illustrator. Perfeita para profissionais criativos.',
        url: 'https://firefly.adobe.com',
        category: 'imagem',
        emoji: '🔥',
        gradient: 'linear-gradient(135deg, #dc2626, #ea580c)',
        badge: 'Freemium',
    },
    {
        id: 'leonardo',
        name: 'Leonardo AI',
        description: 'Plataforma completa com modelos especializados. Ótima para game art, concept art e ilustrações detalhadas.',
        url: 'https://leonardo.ai',
        category: 'imagem',
        emoji: '🦁',
        gradient: 'linear-gradient(135deg, #d97706, #ca8a04)',
        badge: 'Freemium',
    },
    {
        id: 'flux',
        name: 'Flux',
        description: 'Modelo open source de última geração da Black Forest Labs. Qualidade excepcional disponível em várias plataformas.',
        url: 'https://blackforestlabs.ai',
        category: 'imagem',
        emoji: '⚡',
        gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
        badge: 'Freemium',
    },

    // ─────────────────────────────────────────
    // 🎬 VÍDEO
    // ─────────────────────────────────────────
    {
        id: 'runway',
        name: 'Runway Gen-3',
        description: 'Suite profissional de geração e edição de vídeo com IA. O padrão da indústria criativa para vídeos gerados por IA.',
        url: 'https://runwayml.com',
        category: 'video',
        emoji: '🎬',
        gradient: 'linear-gradient(135deg, #16a34a, #059669)',
        badge: 'Freemium',
        featured: true,
    },
    {
        id: 'sora',
        name: 'Sora',
        description: 'Modelo de geração de vídeo da OpenAI. Cria cenas cinemáticas realistas a partir de descrições em texto.',
        url: 'https://sora.com',
        category: 'video',
        emoji: '🌀',
        gradient: 'linear-gradient(135deg, #2563eb, #4f46e5)',
        badge: 'Pago',
    },
    {
        id: 'kling',
        name: 'Kling AI',
        description: 'Geração de vídeo de alta qualidade da Kuaishou. Movimentos realistas e excelente aderência ao prompt.',
        url: 'https://klingai.com',
        category: 'video',
        emoji: '🎥',
        gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
        badge: 'Freemium',
    },
    {
        id: 'pika',
        name: 'Pika',
        description: 'Criação e edição de vídeo com IA. Animação de imagens e efeitos criativos de forma rápida e intuitiva.',
        url: 'https://pika.art',
        category: 'video',
        emoji: '✨',
        gradient: 'linear-gradient(135deg, #d97706, #ea580c)',
        badge: 'Freemium',
    },
    {
        id: 'luma',
        name: 'Luma Dream Machine',
        description: 'Geração de vídeo com física convincente e câmeras realistas. Ótimo para produtos e cenas de movimento.',
        url: 'https://lumalabs.ai/dream-machine',
        category: 'video',
        emoji: '🌟',
        gradient: 'linear-gradient(135deg, #0891b2, #0e7490)',
        badge: 'Freemium',
    },

    // ─────────────────────────────────────────
    // ✍️ TEXTO & CHAT
    // ─────────────────────────────────────────
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        description: 'O assistente de IA mais popular do mundo. Ideal para escrita, análise, código e brainstorming criativo.',
        url: 'https://chat.openai.com',
        category: 'texto',
        emoji: '🤖',
        gradient: 'linear-gradient(135deg, #16a34a, #0d9488)',
        badge: 'Freemium',
        featured: true,
    },
    {
        id: 'claude',
        name: 'Claude',
        description: 'IA da Anthropic com janela de contexto enorme (200k tokens). Excelente para análise de documentos longos.',
        url: 'https://claude.ai',
        category: 'texto',
        emoji: '🧠',
        gradient: 'linear-gradient(135deg, #d97706, #b45309)',
        badge: 'Freemium',
        featured: true,
    },
    {
        id: 'gemini',
        name: 'Gemini',
        description: 'IA multimodal do Google integrada ao Workspace. Ideal para quem já vive no ecossistema Google.',
        url: 'https://gemini.google.com',
        category: 'texto',
        emoji: '✨',
        gradient: 'linear-gradient(135deg, #2563eb, #7c3aed)',
        badge: 'Freemium',
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        description: 'Motor de busca com IA que cita fontes confiáveis em tempo real. Ideal para pesquisas verificáveis.',
        url: 'https://perplexity.ai',
        category: 'texto',
        emoji: '🔮',
        gradient: 'linear-gradient(135deg, #0891b2, #2563eb)',
        badge: 'Freemium',
    },
    {
        id: 'grok',
        name: 'Grok',
        description: 'IA do X com acesso a informações em tempo real. Personalidade irreverente e respostas atualizadas.',
        url: 'https://grok.x.ai',
        category: 'texto',
        emoji: '🦾',
        gradient: 'linear-gradient(135deg, #1f2937, #374151)',
        badge: 'Freemium',
    },

    // ─────────────────────────────────────────
    // 💻 CÓDIGO
    // ─────────────────────────────────────────
    {
        id: 'cursor',
        name: 'Cursor',
        description: 'Editor de código com IA nativa. Autocomplete avançado, refatoração e geração de código no contexto do projeto inteiro.',
        url: 'https://cursor.sh',
        category: 'codigo',
        emoji: '⌨️',
        gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
        badge: 'Freemium',
        featured: true,
    },
    {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        description: 'Par programador IA do GitHub integrado ao VS Code e outros IDEs. Sugestões de código em tempo real.',
        url: 'https://github.com/features/copilot',
        category: 'codigo',
        emoji: '🐙',
        gradient: 'linear-gradient(135deg, #24292e, #444d56)',
        badge: 'Pago',
    },
    {
        id: 'v0',
        name: 'v0 by Vercel',
        description: 'Gere componentes React e interfaces Tailwind com IA. Do prompt ao código pronto para produção em segundos.',
        url: 'https://v0.dev',
        category: 'codigo',
        emoji: '🎯',
        gradient: 'linear-gradient(135deg, #1f2937, #111827)',
        badge: 'Freemium',
    },
    {
        id: 'bolt',
        name: 'Bolt.new',
        description: 'Desenvolvimento full-stack com IA direto no browser. Crie, edite e faça deploy de apps completos sem configuração.',
        url: 'https://bolt.new',
        category: 'codigo',
        emoji: '⚡',
        gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)',
        badge: 'Freemium',
    },

    // ─────────────────────────────────────────
    // 🎵 ÁUDIO & MÚSICA
    // ─────────────────────────────────────────
    {
        id: 'suno',
        name: 'Suno',
        description: 'Crie músicas completas com voz, letra e instrumentação a partir de texto. Qualidade surpreendente para criadores.',
        url: 'https://suno.ai',
        category: 'audio',
        emoji: '🎵',
        gradient: 'linear-gradient(135deg, #db2777, #9333ea)',
        badge: 'Freemium',
        featured: true,
    },
    {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        description: 'Síntese de voz ultra-realista. Clone sua voz, crie personagens ou produza narração profissional em múltiplos idiomas.',
        url: 'https://elevenlabs.io',
        category: 'audio',
        emoji: '🎙️',
        gradient: 'linear-gradient(135deg, #2563eb, #0891b2)',
        badge: 'Freemium',
    },
    {
        id: 'udio',
        name: 'Udio',
        description: 'Geração de música com controle avançado de estilo, gênero e instrumentação. Alta qualidade e fidelidade sonora.',
        url: 'https://udio.com',
        category: 'audio',
        emoji: '🎼',
        gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
        badge: 'Freemium',
    },

    // ─────────────────────────────────────────
    // ⚡ PRODUTIVIDADE
    // ─────────────────────────────────────────
    {
        id: 'gamma',
        name: 'Gamma',
        description: 'Crie apresentações, sites e documentos com IA em segundos. Visual moderno e profissional sem esforço de design.',
        url: 'https://gamma.app',
        category: 'produtividade',
        emoji: '📊',
        gradient: 'linear-gradient(135deg, #7c3aed, #9333ea)',
        badge: 'Freemium',
        featured: true,
    },
    {
        id: 'notion-ai',
        name: 'Notion AI',
        description: 'IA integrada ao Notion para escrever, resumir, traduzir e organizar documentos e projetos de forma inteligente.',
        url: 'https://notion.so/product/ai',
        category: 'produtividade',
        emoji: '📝',
        gradient: 'linear-gradient(135deg, #374151, #1f2937)',
        badge: 'Pago',
    },
    {
        id: 'make',
        name: 'Make',
        description: 'Automatize fluxos de trabalho conectando centenas de apps com IA. Poderoso e visual, sem necessidade de código.',
        url: 'https://make.com',
        category: 'produtividade',
        emoji: '🔄',
        gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
        badge: 'Freemium',
    },
    {
        id: 'zapier',
        name: 'Zapier AI',
        description: 'Automatize processos conectando mais de 7000 apps. IA que entende linguagem natural para criar automações.',
        url: 'https://zapier.com',
        category: 'produtividade',
        emoji: '⚡',
        gradient: 'linear-gradient(135deg, #ea580c, #dc2626)',
        badge: 'Freemium',
    },

    // ─────────────────────────────────────────
    // 🧑‍💼 AVATAR & VÍDEO IA
    // ─────────────────────────────────────────
    {
        id: 'heygen',
        name: 'HeyGen',
        description: 'Crie vídeos profissionais com avatares IA realistas. Ideal para cursos, treinamentos e vídeos de marketing.',
        url: 'https://heygen.com',
        category: 'avatar',
        emoji: '🧑‍💼',
        gradient: 'linear-gradient(135deg, #0891b2, #0e7490)',
        badge: 'Freemium',
        featured: true,
    },
    {
        id: 'synthesia',
        name: 'Synthesia',
        description: 'Produza vídeos com apresentadores IA em mais de 120 idiomas. Padrão corporativo para e-learning e treinamentos.',
        url: 'https://synthesia.io',
        category: 'avatar',
        emoji: '🎭',
        gradient: 'linear-gradient(135deg, #2563eb, #7c3aed)',
        badge: 'Pago',
    },
    {
        id: 'did',
        name: 'D-ID',
        description: 'Anime fotos com IA e crie vídeos com avatares digitais. Fácil de usar para qualquer nível de experiência.',
        url: 'https://d-id.com',
        category: 'avatar',
        emoji: '🌐',
        gradient: 'linear-gradient(135deg, #059669, #0891b2)',
        badge: 'Freemium',
    },

];

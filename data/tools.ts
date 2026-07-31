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

export type Badge = 'Gratis' | 'Freemium' | 'A pagamento';

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
    imagem: { label: 'Immagini', emoji: '🎨' },
    video: { label: 'Video', emoji: '🎬' },
    texto: { label: 'Testo e Chat', emoji: '✍️' },
    codigo: { label: 'Codice', emoji: '💻' },
    audio: { label: 'Audio e Musica', emoji: '🎵' },
    produtividade: { label: 'Produttivita', emoji: '⚡' },
    avatar: { label: 'Avatar e Video IA', emoji: '🧑‍💼' },
};

export const tools: Tool[] = [

    // ─────────────────────────────────────────
    // 🎨 IMAGEM
    // ─────────────────────────────────────────
    {
        id: 'midjourney',
        name: 'Midjourney',
        description: 'Crea immagini fotorealistiche e artistiche con prompt testuali. Uno standard di riferimento per la creazione visiva con IA.',
        url: 'https://www.midjourney.com',
        category: 'imagem',
        emoji: '🎨',
        gradient: 'linear-gradient(135deg, #7c3aed, #db2777)',
        badge: 'A pagamento',
        featured: true,
    },
    {
        id: 'dalle3',
        name: 'DALL·E 3',
        description: 'Generazione di immagini di OpenAI integrata in ChatGPT Plus. Ottima per seguire istruzioni dettagliate con precisione.',
        url: 'https://openai.com/dall-e-3',
        category: 'imagem',
        emoji: '🖼️',
        gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
        badge: 'Freemium',
    },
    {
        id: 'ideogram',
        name: 'Ideogram',
        description: 'Specialista nella creazione di immagini con testo integrato. Perfetto per loghi, poster e design tipografici.',
        url: 'https://ideogram.ai',
        category: 'imagem',
        emoji: '💡',
        gradient: 'linear-gradient(135deg, #ea580c, #dc2626)',
        badge: 'Freemium',
    },
    {
        id: 'adobe-firefly',
        name: 'Adobe Firefly',
        description: 'IA generativa di Adobe integrata in Photoshop e Illustrator. Ideale per i professionisti creativi.',
        url: 'https://firefly.adobe.com',
        category: 'imagem',
        emoji: '🔥',
        gradient: 'linear-gradient(135deg, #dc2626, #ea580c)',
        badge: 'Freemium',
    },
    {
        id: 'leonardo',
        name: 'Leonardo AI',
        description: 'Piattaforma completa con modelli specializzati. Ottima per game art, concept art e illustrazioni dettagliate.',
        url: 'https://leonardo.ai',
        category: 'imagem',
        emoji: '🦁',
        gradient: 'linear-gradient(135deg, #d97706, #ca8a04)',
        badge: 'Freemium',
    },
    {
        id: 'flux',
        name: 'Flux',
        description: 'Modello open source di ultima generazione di Black Forest Labs. Qualita eccellente disponibile su piu piattaforme.',
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
        description: 'Suite professionale per generazione e montaggio video con IA. Un riferimento per i video generati con IA.',
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
        description: 'Modello di generazione video di OpenAI. Crea scene cinematografiche realistiche a partire da descrizioni testuali.',
        url: 'https://sora.com',
        category: 'video',
        emoji: '🌀',
        gradient: 'linear-gradient(135deg, #2563eb, #4f46e5)',
        badge: 'A pagamento',
    },
    {
        id: 'kling',
        name: 'Kling AI',
        description: 'Generazione video di alta qualita di Kuaishou. Movimenti realistici e ottima aderenza al prompt.',
        url: 'https://klingai.com',
        category: 'video',
        emoji: '🎥',
        gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
        badge: 'Freemium',
    },
    {
        id: 'pika',
        name: 'Pika',
        description: 'Creazione e modifica di video con IA. Animazione di immagini ed effetti creativi in modo rapido e intuitivo.',
        url: 'https://pika.art',
        category: 'video',
        emoji: '✨',
        gradient: 'linear-gradient(135deg, #d97706, #ea580c)',
        badge: 'Freemium',
    },
    {
        id: 'luma',
        name: 'Luma Dream Machine',
        description: 'Generazione video con fisica convincente e camere realistiche. Ottimo per prodotti e scene in movimento.',
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
        description: 'L assistente IA piu popolare al mondo. Ideale per scrittura, analisi, codice e brainstorming creativo.',
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
        description: 'IA di Anthropic con una finestra di contesto enorme (200k token). Eccellente per analizzare documenti lunghi.',
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
        description: 'IA multimodale di Google integrata in Workspace. Ideale per chi lavora gia nell ecosistema Google.',
        url: 'https://gemini.google.com',
        category: 'texto',
        emoji: '✨',
        gradient: 'linear-gradient(135deg, #2563eb, #7c3aed)',
        badge: 'Freemium',
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        description: 'Motore di ricerca con IA che cita fonti affidabili in tempo reale. Ideale per ricerche verificabili.',
        url: 'https://perplexity.ai',
        category: 'texto',
        emoji: '🔮',
        gradient: 'linear-gradient(135deg, #0891b2, #2563eb)',
        badge: 'Freemium',
    },
    {
        id: 'grok',
        name: 'Grok',
        description: 'IA di X con accesso a informazioni in tempo reale. Personalita diretta e risposte aggiornate.',
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
        description: 'Editor di codice con IA nativa. Autocomplete avanzato, refactoring e generazione di codice nel contesto dell intero progetto.',
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
        description: 'Pair programmer IA di GitHub integrato in VS Code e altri IDE. Suggerimenti di codice in tempo reale.',
        url: 'https://github.com/features/copilot',
        category: 'codigo',
        emoji: '🐙',
        gradient: 'linear-gradient(135deg, #24292e, #444d56)',
        badge: 'A pagamento',
    },
    {
        id: 'v0',
        name: 'v0 by Vercel',
        description: 'Genera componenti React e interfacce Tailwind con IA. Dal prompt al codice pronto per la produzione in pochi secondi.',
        url: 'https://v0.dev',
        category: 'codigo',
        emoji: '🎯',
        gradient: 'linear-gradient(135deg, #1f2937, #111827)',
        badge: 'Freemium',
    },
    {
        id: 'bolt',
        name: 'Bolt.new',
        description: 'Sviluppo full-stack con IA direttamente nel browser. Crea, modifica e distribuisci app complete senza configurazione.',
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
        description: 'Crea brani completi con voce, testo e strumentazione a partire dal testo. Qualita sorprendente per i creator.',
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
        description: 'Sintesi vocale ultra realistica. Clona la tua voce, crea personaggi o produci narrazioni professionali in piu lingue.',
        url: 'https://elevenlabs.io',
        category: 'audio',
        emoji: '🎙️',
        gradient: 'linear-gradient(135deg, #2563eb, #0891b2)',
        badge: 'Freemium',
    },
    {
        id: 'udio',
        name: 'Udio',
        description: 'Generazione musicale con controllo avanzato di stile, genere e strumentazione. Alta qualita e grande fedelta sonora.',
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
        description: 'Crea presentazioni, siti e documenti con IA in pochi secondi. Aspetto moderno e professionale senza sforzo di design.',
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
        description: 'IA integrata in Notion per scrivere, riassumere, tradurre e organizzare documenti e progetti in modo intelligente.',
        url: 'https://notion.so/product/ai',
        category: 'produtividade',
        emoji: '📝',
        gradient: 'linear-gradient(135deg, #374151, #1f2937)',
        badge: 'A pagamento',
    },
    {
        id: 'make',
        name: 'Make',
        description: 'Automatizza i flussi di lavoro collegando centinaia di app con IA. Potente e visuale, senza bisogno di codice.',
        url: 'https://make.com',
        category: 'produtividade',
        emoji: '🔄',
        gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
        badge: 'Freemium',
    },
    {
        id: 'zapier',
        name: 'Zapier AI',
        description: 'Automatizza processi collegando oltre 7000 app. IA che comprende il linguaggio naturale per creare automazioni.',
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
        description: 'Crea video professionali con avatar IA realistici. Ideale per corsi, formazione e video di marketing.',
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
        description: 'Produci video con presentatori IA in oltre 120 lingue. Standard aziendale per e-learning e formazione.',
        url: 'https://synthesia.io',
        category: 'avatar',
        emoji: '🎭',
        gradient: 'linear-gradient(135deg, #2563eb, #7c3aed)',
        badge: 'A pagamento',
    },
    {
        id: 'did',
        name: 'D-ID',
        description: 'Anima foto con IA e crea video con avatar digitali. Facile da usare per qualsiasi livello di esperienza.',
        url: 'https://d-id.com',
        category: 'avatar',
        emoji: '🌐',
        gradient: 'linear-gradient(135deg, #059669, #0891b2)',
        badge: 'Freemium',
    },

];

'use client'

export default function Background() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>

            {/* Base color */}
            <div className="absolute inset-0 bg-[#fafaf9]" />

            {/* ── Blob 1 — paper shadow, top-left ── */}
            <div
                className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full opacity-[0.48] animate-blob"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.98) 0%, rgba(231,229,228,0.9) 32%, transparent 70%)',
                    filter: 'blur(90px)',
                }}
            />

            {/* ── Blob 2 — soft ink, top-right ── */}
            <div
                className="absolute -top-20 right-0 w-[550px] h-[550px] rounded-full opacity-[0.22] animate-blob-slow"
                style={{
                    background: 'radial-gradient(circle, rgba(214,211,209,0.4) 0%, rgba(168,162,158,0.24) 45%, transparent 70%)',
                    filter: 'blur(90px)',
                    animationDelay: '-9s',
                }}
            />

            {/* ── Blob 3 — porcelain, mid-left ── */}
            <div
                className="absolute top-1/2 -left-24 w-[480px] h-[480px] rounded-full opacity-[0.28] animate-blob-slower"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.92) 0%, rgba(231,229,228,0.78) 45%, transparent 70%)',
                    filter: 'blur(90px)',
                    animationDelay: '-17s',
                }}
            />

            {/* ── Blob 4 — graphite wash, bottom-right ── */}
            <div
                className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.16] animate-blob"
                style={{
                    background: 'radial-gradient(circle, rgba(214,211,209,0.34) 0%, rgba(120,113,108,0.2) 45%, transparent 70%)',
                    filter: 'blur(90px)',
                    animationDelay: '-4s',
                }}
            />

            {/* ── Subtle dot grid ── */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'radial-gradient(circle, rgba(0,0,0,0.32) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />

            {/* ── Bottom fade ── */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#fafaf9] to-transparent" />
        </div>
    )
}

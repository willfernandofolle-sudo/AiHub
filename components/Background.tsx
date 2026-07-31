'use client'

export default function Background() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>

            {/* Base color */}
            <div className="absolute inset-0 bg-[#050505]" />

            {/* ── Blob 1 — graphite, top-left ── */}
            <div
                className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full opacity-[0.18] animate-blob"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(115,115,115,0.18) 35%, transparent 70%)',
                    filter: 'blur(90px)',
                }}
            />

            {/* ── Blob 2 — silver, top-right ── */}
            <div
                className="absolute -top-20 right-0 w-[550px] h-[550px] rounded-full opacity-[0.12] animate-blob-slow"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(161,161,170,0.16) 45%, transparent 70%)',
                    filter: 'blur(90px)',
                    animationDelay: '-9s',
                }}
            />

            {/* ── Blob 3 — smoke, mid-left ── */}
            <div
                className="absolute top-1/2 -left-24 w-[480px] h-[480px] rounded-full opacity-[0.12] animate-blob-slower"
                style={{
                    background: 'radial-gradient(circle, rgba(212,212,216,0.13) 0%, rgba(82,82,91,0.16) 45%, transparent 70%)',
                    filter: 'blur(90px)',
                    animationDelay: '-17s',
                }}
            />

            {/* ── Blob 4 — ash, bottom-right ── */}
            <div
                className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.1] animate-blob"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(63,63,70,0.16) 45%, transparent 70%)',
                    filter: 'blur(90px)',
                    animationDelay: '-4s',
                }}
            />

            {/* ── Subtle dot grid ── */}
            <div
                className="absolute inset-0 opacity-[0.018]"
                style={{
                    backgroundImage:
                        'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />

            {/* ── Bottom fade ── */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
    )
}

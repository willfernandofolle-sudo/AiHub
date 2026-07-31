'use client'

export default function Background() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>

            {/* Base color */}
            <div className="absolute inset-0 bg-[#08111f]" />

            {/* ── Blob 1 — electric dusk, top-left ── */}
            <div
                className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full opacity-[0.34] animate-blob"
                style={{
                    background: 'radial-gradient(circle, rgba(126, 119, 255, 0.34) 0%, rgba(60, 130, 246, 0.18) 34%, transparent 70%)',
                    filter: 'blur(90px)',
                }}
            />

            {/* ── Blob 2 — cyan flare, top-right ── */}
            <div
                className="absolute -top-20 right-0 w-[550px] h-[550px] rounded-full opacity-[0.2] animate-blob-slow"
                style={{
                    background: 'radial-gradient(circle, rgba(103,232,249,0.3) 0%, rgba(59,130,246,0.16) 45%, transparent 70%)',
                    filter: 'blur(90px)',
                    animationDelay: '-9s',
                }}
            />

            {/* ── Blob 3 — indigo wash, mid-left ── */}
            <div
                className="absolute top-1/2 -left-24 w-[480px] h-[480px] rounded-full opacity-[0.2] animate-blob-slower"
                style={{
                    background: 'radial-gradient(circle, rgba(99,102,241,0.24) 0%, rgba(30,41,59,0.16) 45%, transparent 70%)',
                    filter: 'blur(90px)',
                    animationDelay: '-17s',
                }}
            />

            {/* ── Blob 4 — abyss glow, bottom-right ── */}
            <div
                className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.18] animate-blob"
                style={{
                    background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(8,17,31,0.12) 45%, transparent 70%)',
                    filter: 'blur(90px)',
                    animationDelay: '-4s',
                }}
            />

            {/* ── Subtle dot grid ── */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />

            {/* ── Bottom fade ── */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#08111f] to-transparent" />
        </div>
    )
}

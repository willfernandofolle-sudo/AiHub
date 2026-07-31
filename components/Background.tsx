'use client'

export default function Background() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>

            {/* Base color */}
            <div className="absolute inset-0 bg-[#06070f]" />

            {/* ── Blob 1 — violet, top-left ── */}
            <div
                className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full opacity-[0.22] animate-blob"
                style={{
                    background: 'radial-gradient(circle, #4f46e5 0%, #7c3aed 40%, transparent 70%)',
                    filter: 'blur(90px)',
                }}
            />

            {/* ── Blob 2 — cyan, top-right ── */}
            <div
                className="absolute -top-20 right-0 w-[550px] h-[550px] rounded-full opacity-[0.16] animate-blob-slow"
                style={{
                    background: 'radial-gradient(circle, #0891b2 0%, #2563eb 45%, transparent 70%)',
                    filter: 'blur(90px)',
                    animationDelay: '-9s',
                }}
            />

            {/* ── Blob 3 — pink, mid-left ── */}
            <div
                className="absolute top-1/2 -left-24 w-[480px] h-[480px] rounded-full opacity-[0.18] animate-blob-slower"
                style={{
                    background: 'radial-gradient(circle, #db2777 0%, #9333ea 45%, transparent 70%)',
                    filter: 'blur(90px)',
                    animationDelay: '-17s',
                }}
            />

            {/* ── Blob 4 — teal, bottom-right ── */}
            <div
                className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.14] animate-blob"
                style={{
                    background: 'radial-gradient(circle, #059669 0%, #0891b2 45%, transparent 70%)',
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
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#06070f] to-transparent" />
        </div>
    )
}

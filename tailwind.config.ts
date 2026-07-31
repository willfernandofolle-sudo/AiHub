import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './data/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'blob': 'blob 22s infinite ease-in-out',
                'blob-slow': 'blob 32s infinite ease-in-out',
                'blob-slower': 'blob 44s infinite ease-in-out',
                'shimmer': 'shimmer 3s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
            },
            keyframes: {
                blob: {
                    '0%, 100%': { transform: 'translate(0,0) scale(1)' },
                    '25%': { transform: 'translate(6%,-12%) scale(1.06)' },
                    '50%': { transform: 'translate(-4%,6%) scale(0.94)' },
                    '75%': { transform: 'translate(9%,4%) scale(1.03)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
            },
        },
    },
    plugins: [],
}

export default config

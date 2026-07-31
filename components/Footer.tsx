export default function Footer() {
    return (
        <footer className="border-t border-black/[0.08] py-12 px-5">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

                <div className="flex items-center gap-2.5">
                    <span
                        className="w-6 h-6 rounded-lg text-xs flex items-center justify-center font-bold text-white bg-black"
                        style={{ boxShadow: '0 10px 22px rgba(10,10,10,0.12)' }}
                    >
                        A
                    </span>
                    <span className="text-sm text-black/45">
                        AI Hub — Esclusivo per gli studenti del corso di IA
                    </span>
                </div>

                <p className="text-xs text-black/35 text-center">
                    Link a strumenti di terze parti. Usali con responsabilita.
                </p>

            </div>
        </footer>
    )
}

import { useState } from "react";

const NAV_LINKS = [
    { label: "Quiénes somos", href: "#quienes-somos" },
    { label: "Impacto", href: "#impacto" },
    { label: "Noticias", href: "#noticias" },
    { label: "Equipo", href: "#equipo" },
    { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                <a href="#" className="text-xl font-bold text-dark tracking-tight">
                    Sangalala
                </a>

                {/* Desktop */}
                <ul className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={href}>
                            <a href={href} className="text-sm text-gray-600 hover:text-primary transition-colors">
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#donar"
                            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
                        >
                            Donar
                        </a>
                    </li>
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menú"
                >
                    <span
                        className={`block w-6 h-0.5 bg-dark transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <span className={`block w-6 h-0.5 bg-dark transition-opacity ${open ? "opacity-0" : ""}`} />
                    <span
                        className={`block w-6 h-0.5 bg-dark transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <ul className="md:hidden bg-white border-t px-6 pb-4">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="block py-3 text-gray-600 hover:text-primary transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#donar"
                            className="block mt-2 text-center bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            Donar
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}

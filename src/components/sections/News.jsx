import { SectionTitle } from "../ui/index.js";

export function News() {
    return (
        <section id="noticias" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <SectionTitle>Noticias</SectionTitle>
                <p className="text-lg text-gray-600 mb-8">Mantente al tanto de nuestro progreso</p>
                <a
                    href="/noticias"
                    className="inline-block border-2 border-dark text-dark px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-dark hover:text-white transition-colors"
                >
                    Ver más
                </a>
            </div>
        </section>
    );
}

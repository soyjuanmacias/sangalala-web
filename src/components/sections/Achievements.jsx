const MILESTONES = [
    {
        year: "2024",
        month: "21 de enero",
        title: "Fundación de Sangalala",
        description: "Nace la ONG con el propósito de mejorar la educación y nutrición de los niños/as y jóvenes de Malawi.",
        reel: "https://www.instagram.com/p/C2VK_XXoWa0/embed/",
    },
    {
        year: "2024",
        month: "",
        title: "Compra del terreno",
        description: "Adquirimos el terreno en Likuni, Malawi, donde se construirá el centro educativo.",
        reel: "https://www.instagram.com/p/C_VveP6i31D/embed/",
    },
    {
        year: "2024",
        month: "",
        title: "Construcción de muros",
        description: "Se levantan los primeros muros perimetrales en el terreno, sentando las bases del proyecto.",
        reel: "https://www.instagram.com/p/DNKuIaUo4xk/embed/",
    },
    {
        year: "2024",
        month: "",
        title: "Construcción de las escuelas",
        description: "Se completan los dos primeros edificios escolares, permitiendo escolarizar durante todo el año.",
        reel: "https://www.instagram.com/p/DEcko3yIe0m/embed/",
    },
    {
        year: "2025",
        month: "",
        title: "Pozo de agua",
        description: "Se excava e instala el pozo de agua que abastece al centro y a la comunidad.",
        reel: "https://www.instagram.com/p/DRC_w_ICKTd/embed/",
    },
    {
        year: "2025",
        month: "",
        title: "Depósito y bomba de agua",
        description: "Se instala el depósito elevado y la bomba para garantizar el suministro continuo de agua potable.",
        reel: "https://www.instagram.com/p/DWPFRr3DYF2/embed/",
    },
    {
        year: "2025",
        month: "Diciembre",
        title: "Resumen 2025",
        description: "Un repaso a todo lo que hemos logrado juntos a lo largo de 2025.",
        reel: "https://www.instagram.com/p/DS742HFDPWA/embed/",
    },
    {
        year: "2025",
        month: "",
        title: "Resumen Sangalala",
        description: "Un repaso a todo lo que hemos logrado juntos desde los inicios de Sangalala.",
        reel: "https://www.instagram.com/p/DU22q0rjAK2/embed/",
    },
];

function MilestoneCard({ title, description, reel, month, year, index }) {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex items-start gap-8 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
            {/* Contenido */}
            <div className={`flex-1 pb-12 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} pl-10 md:pl-0`}>
                <div className={`inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider`}>
                    {month ? `${month} · ${year}` : year}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
                {reel ? (
                    <div className="rounded-2xl overflow-hidden w-full max-w-xs mx-auto md:mx-0 aspect-9/16 bg-gray-100">
                        <iframe
                            src={reel}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            allowFullScreen
                            title={title}
                        />
                    </div>
                ) : (
                    <div className="rounded-2xl w-full max-w-xs aspect-9/16 bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-200 mx-auto md:mx-0">
                        <div className="text-center text-gray-300 px-4">
                            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                            </svg>
                            <p className="text-xs">Próximamente reel</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Punto central — solo visible en md+ */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md z-10" />
            </div>

            {/* Punto lateral — solo visible en mobile */}
            <div className="absolute left-0 top-0 flex flex-col items-center md:hidden">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md z-10" />
            </div>

            {/* Espacio vacío al lado contrario en desktop */}
            <div className="hidden md:block flex-1" />
        </div>
    );
}

export function Achievements() {
    return (
        <section id="logros" className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-dark">Nuestros logros</h2>
                    <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
                        Un recorrido por los hitos que han marcado el camino de Sangalala desde su fundación.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Línea vertical central — desktop */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />
                    {/* Línea vertical izquierda — mobile */}
                    <div className="md:hidden absolute left-1.5 top-0 bottom-0 w-0.5 bg-primary/20" />

                    <div>
                        {MILESTONES.map((milestone, index) => (
                            <MilestoneCard key={index} {...milestone} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

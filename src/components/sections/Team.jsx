import { SectionTitle } from "../ui/index.js";

const TEAM_MEMBERS = [
    {
        name: "Ana Guerra Castillejo",
        role: "Presidenta y Fundadora",
        quote: "La educación nos caracteriza como seres humanos, es un importante motor del desarrollo personal y social, al que por suerte yo he podido acceder y que mediante ella espero favorecer la de muchos niños/as y jóvenes en Malawi.",
    },
    {
        name: "Esperanza Guerra",
        role: "Vicepresidenta y Coordinadora de Eventos",
        quote: "Querer que los niños/as tengan la oportunidad de recibir una educación digna es lo que impulsa mi labor en Sangalala. Me hace muy feliz creer en que estos proyectos puedan llevarse a cabo desde una perspectiva de amor y respeto.",
    },
    {
        name: "Beatriz Garcés García",
        role: "Coordinadora de la ONG en España",
        quote: "La educación para mí es un acto de amor y compromiso con la equidad. Cada aprendizaje es un paso hacia un mundo más accesible, inclusivo y humano.",
    },
    {
        name: "Carla Urbón García",
        role: "Coordinadora de Proyectos en Malawi",
        quote: "Todos tenemos una responsabilidad social en la vida. La mía es enfocar la educación de un niño pequeño en una preparación para la vida.",
    },
];

function TeamCard({ name, role, quote }) {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                {name.charAt(0)}
            </div>
            <h3 className="text-lg font-bold text-dark">{name}</h3>
            <p className="text-sm text-primary font-medium mb-4">{role}</p>
            <blockquote className="text-gray-500 text-sm leading-relaxed italic flex-1">
                &ldquo;{quote}&rdquo;
            </blockquote>
        </div>
    );
}

export function Team() {
    return (
        <section id="equipo" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <SectionTitle>Conoce nuestro equipo</SectionTitle>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {TEAM_MEMBERS.map((member) => (
                        <TeamCard key={member.name} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
}

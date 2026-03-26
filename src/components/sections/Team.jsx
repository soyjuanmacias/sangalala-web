import foto7 from '../../images/Foto-7.png';
import foto2 from '../../images/Foto-2.jpeg';
import foto11 from '../../images/Foto-11.jpeg';
import foto6 from '../../images/Foto-6.png';

const TEAM_MEMBERS = [
    {
        name: "Ana Guerra Castillejo",
        role: "Presidenta y Fundadora",
        quote: "La educación nos caracteriza como seres humanos, es un importante motor del desarrollo personal y social, al que por suerte yo he podido acceder y que mediante ella espero favorecer la de muchos niños/as y jóvenes en Malawi.",
        photo: foto7,
        objectPosition: "50% 50%",
    },
    {
        name: "Esperanza Guerra",
        role: "Vicepresidenta y Coordinadora de Eventos",
        quote: "Querer que los niños/as tengan la oportunidad de recibir una educación digna es lo que impulsa mi labor en Sangalala. Me hace muy feliz creer en que estos proyectos puedan llevarse a cabo desde una perspectiva de amor y respeto.",
        photo: foto2,
        objectPosition: "50% 15%",
    },
    {
        name: "Beatriz Garcés García",
        role: "Coordinadora de la ONG en España",
        quote: "La educación para mí es un acto de amor y compromiso con la equidad. Cada aprendizaje es un paso hacia un mundo más accesible, inclusivo y humano.",
        photo: foto11,
        objectPosition: "50% 15%",
    },
    {
        name: "Carla Urbón García",
        role: "Coordinadora de Proyectos en Malawi",
        quote: "Todos tenemos una responsabilidad social en la vida. La mía es enfocar la educación de un niño pequeño en una preparación para la vida.",
        photo: foto6,
        objectPosition: "50% 15%",
    },
];

function TeamCard({ name, role, quote, photo, objectPosition = "50% 15%" }) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="aspect-square w-full overflow-hidden rounded-2xl mb-5">
                <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition }}
                />
            </div>
            <h3 className="text-lg font-bold text-dark mb-1">{name}</h3>
            <p className="text-sm text-primary font-medium mb-3">{role}</p>
            <p className="text-gray-500 text-sm leading-relaxed">
                &ldquo;{quote}&rdquo;
            </p>
        </div>
    );
}

export function Team() {
    return (
        <section id="equipo" className="py-16 pb-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-dark text-center mb-16">
                    Conoce nuestro equipo
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM_MEMBERS.map((member) => (
                        <TeamCard key={member.name} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
}

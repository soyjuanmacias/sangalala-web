import foto12 from '../../images/Foto-12.jpeg';
import foto14 from '../../images/Foto-14.jpeg';
import foto3 from '../../images/Foto-3.jpeg';
import foto13 from '../../images/Foto-13.jpeg';

export function About() {
    return (
        <section id="quienes-somos" className="bg-white py-24 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
                {/* Columna izquierda — texto */}
                <div className="flex-1">
                    <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
                        Quiénes somos
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Somos una Organización No Gubernamental que trabaja en Malawi, por y para lograr que diferentes
                        niños/as y jóvenes tengan acceso a la educación y nutrición, garantizando un entorno seguro donde
                        puedan desarrollarse social, cultural y académicamente para tener en el futuro una mejor calidad de
                        vida.
                    </p>
                </div>

                {/* Columna derecha — fotos en grid 2x2 */}
                <div className="flex-1 grid grid-cols-2 gap-3">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src={foto12} alt="Sangalala Malawi" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src={foto14} alt="Sangalala Malawi" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src={foto3} alt="Sangalala Malawi" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src={foto13} alt="Sangalala Malawi" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}

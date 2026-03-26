import { SectionTitle } from "../ui/index.js";
import foto12 from '../../images/Foto-12.jpeg';
import foto14 from '../../images/Foto-14.jpeg';
import foto3 from '../../images/Foto-3.jpeg';
import foto13 from '../../images/Foto-13.jpeg';

export function About() {
    return (
        <section id="quienes-somos" className="bg-white">
            <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
                <SectionTitle>Quiénes somos</SectionTitle>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Somos una Organización No Gubernamental que trabaja en Malawi, por y para lograr que diferentes
                    niños/as y jóvenes tengan acceso a la educación y nutrición, garantizando un entorno seguro donde
                    puedan desarrollarse social, cultural y académicamente para tener en el futuro una mejor calidad de
                    vida.
                </p>
            </div>
            <div className="grid grid-cols-4">
                <div className="aspect-[4/3] overflow-hidden bg-black">
                    <img src={foto12} alt="Sangalala Malawi" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-black">
                    <img src={foto14} alt="Sangalala Malawi" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-black">
                    <img src={foto3} alt="Sangalala Malawi" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-black">
                    <img src={foto13} alt="Sangalala Malawi" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
}

import { SectionTitle } from "../ui/index.js";
import { Button } from "../ui/index.js";

const DONATE_OPTIONS = [
    {
        title: "Donación Libre",
        description: "Haz una donación única para apoyar nuestras necesidades inmediatas.",
    },
    {
        title: "Hazte Socio",
        description: "Haz una donación recurrente para brindar apoyo constante a nuestros programas.",
        badge: "10€ / 20€ / 30€",
    },
];

const DONATE_URL = "https://docs.google.com/forms/d/1iSeUmuNWkax4aNBouqjzSf95tfM-Tqz1xF0XtkY5_f8/edit";

function DonateCard({ title, description, badge }) {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
            {badge && (
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {badge}
                </span>
            )}
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

export function Donate() {
    return (
        <section id="donar" className="py-24 bg-gradient-to-br from-primary-light via-primary to-primary-dark">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <SectionTitle light>Donar</SectionTitle>
                <p className="text-lg text-white/80 mb-12 max-w-xl mx-auto">
                    Apoya nuestra misión para ayudar a los niños/as y jóvenes en Malawi.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {DONATE_OPTIONS.map((option) => (
                        <DonateCard key={option.title} {...option} />
                    ))}
                </div>
                <Button variant="white" href={DONATE_URL}>
                    Donar
                </Button>
            </div>
        </section>
    );
}

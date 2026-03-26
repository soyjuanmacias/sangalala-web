import fotoHeader from '../../images/foto-header.jpeg';

export function Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center text-center px-6"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${fotoHeader})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                    El mejor medio para educar a los niños y niñas es hacerlos felices
                </h1>
                <div className="w-16 h-1 bg-white/60 mx-auto mb-8 rounded-full" />
                <a
                    href="#quienes-somos"
                    className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm uppercase tracking-wider"
                >
                    Conócenos
                </a>
            </div>
        </section>
    );
}

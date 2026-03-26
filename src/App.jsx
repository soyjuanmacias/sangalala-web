import { Navbar, Footer } from "./components/layout/index.js";
import { Hero, About, Impact, News, Donate, Team, Contact, Achievements } from "./components/sections/index.js";

export function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Impact />
                <News />
                <Donate />
                <Achievements />
                <Team />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
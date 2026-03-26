export function SectionTitle({ children, light = false }) {
    return <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${light ? "text-white" : "text-dark"}`}>{children}</h2>;
}

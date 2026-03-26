const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    outline: "border-2 border-dark text-dark hover:bg-dark hover:text-white",
    white: "bg-white text-dark hover:bg-gray-100",
};

export function Button({ children, variant = "primary", href, className = "", ...props }) {
    const base =
        "inline-block px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-colors duration-300 cursor-pointer";
    const classes = `${base} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}

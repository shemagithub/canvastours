const PageHero = ({ title, subtitle, breadcrumb }) => (
    <section
        className="bg-teal text-white"
        data-testid="page-hero"
    >
        <div className="max-w-7xl mx-auto px-5 py-16 md:py-20 text-center">
            <h1 className="font-display uppercase tracking-wide text-3xl md:text-5xl">
                {title}
            </h1>
            <div className="section-divider" />
            {subtitle && (
                <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
                    {subtitle}
                </p>
            )}
            {breadcrumb && (
                <p className="text-xs uppercase tracking-[0.25em] text-white/55 mt-5">
                    {breadcrumb}
                </p>
            )}
        </div>
    </section>
);

export default PageHero;

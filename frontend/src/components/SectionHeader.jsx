const SectionHeader = ({ title, light = false, eyebrow }) => (
    <div className="mb-2">
        {eyebrow && (
            <p className="text-center font-script text-2xl text-coral mb-1">
                {eyebrow}
            </p>
        )}
        <h2 className={`section-title ${light ? "section-title-light" : ""}`}>
            {title}
        </h2>
        <div className="section-divider" />
    </div>
);

export default SectionHeader;

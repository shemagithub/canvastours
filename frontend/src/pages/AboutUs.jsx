import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

const stats = [
    { value: "12+", label: "Years on the road" },
    { value: "50k", label: "Happy customers" },
    { value: "240", label: "Vehicles in fleet" },
    { value: "18", label: "Cities served" },
];

const team = [
    {
        name: "Mark Stevens",
        role: "Founder & CEO",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=70",
    },
    {
        name: "Nina Park",
        role: "Head of Operations",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=70",
    },
    {
        name: "Carlos Diaz",
        role: "Fleet Manager",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=70",
    },
    {
        name: "Eva Lindqvist",
        role: "Customer Success",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=70",
    },
];

const AboutUs = () => (
    <div data-testid="about-page">
        <PageHero
            title="About Us"
            subtitle="A local car rental company with a passion for the open road and an obsession with great service."
            breadcrumb="Home / About Us"
        />

        {/* Company intro */}
        <section className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
                <div
                    className="min-h-[420px] bg-cover bg-center shadow-xl"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=70")',
                    }}
                />
                <div>
                    <p className="font-script text-coral text-2xl mb-1">
                        our story
                    </p>
                    <h2 className="font-display uppercase text-3xl md:text-4xl text-teal mb-6">
                        Driven by Passion, Built on Trust
                    </h2>
                    <p className="text-[hsl(var(--ink-soft))] leading-relaxed mb-4">
                        Motors started in 2012 with a single Mini Cooper and a
                        simple promise: every customer deserves a clean,
                        reliable car at a fair price — without the fine print.
                    </p>
                    <p className="text-[hsl(var(--ink-soft))] leading-relaxed mb-4">
                        Today we operate a fleet of more than 240 vehicles
                        across 18 cities, but we still answer the phone like a
                        small family business — because at the end of the day,
                        that's what we are.
                    </p>
                    <p className="text-[hsl(var(--ink-soft))] leading-relaxed">
                        From a quick city pickup to a six-month corporate
                        program, our team treats every booking as if it were
                        our only one.
                    </p>
                </div>
            </div>
        </section>

        {/* Stats */}
        <section className="bg-teal text-white py-14">
            <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((s) => (
                    <div key={s.label}>
                        <p className="font-display text-4xl md:text-5xl text-coral">
                            {s.value}
                        </p>
                        <p className="uppercase tracking-[0.2em] text-xs text-white/70 mt-2">
                            {s.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-5">
                <SectionHeader title="Meet The Team" eyebrow="the people" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
                    {team.map((m) => (
                        <article
                            key={m.name}
                            className="bg-white text-center pb-6 shadow-sm hover:shadow-lg transition"
                        >
                            <img
                                src={m.avatar}
                                alt={m.name}
                                className="w-full h-64 object-cover"
                            />
                            <h3 className="font-display text-lg text-teal mt-5">
                                {m.name}
                            </h3>
                            <p className="text-xs uppercase tracking-[0.2em] text-coral mt-1">
                                {m.role}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

export default AboutUs;

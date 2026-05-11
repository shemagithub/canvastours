import { useState } from "react";
import BookingWidget from "../components/BookingWidget";
import SectionHeader from "../components/SectionHeader";
import FeatureItem from "../components/FeatureItem";
import VehicleCard from "../components/VehicleCard";
import { features, vehicles, testimonials } from "../data/mock";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
    const [tIndex, setTIndex] = useState(0);
    const visibleTestimonials = testimonials.slice(tIndex * 3, tIndex * 3 + 3);
    const totalPages = Math.ceil(testimonials.length / 3);

    return (
        <div data-testid="home-page">
            {/* Hero */}
            <section className="bg-cream relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 py-12 md:py-16 grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-12 items-center">
                    <div className="relative">
                        <div className="absolute z-10 top-4 left-2 md:left-6 fade-up">
                            <div className="discount-blob">
                                <span className="text-4xl md:text-5xl font-bold leading-none">
                                    20%
                                </span>
                                <span className="text-xs mt-1 tracking-widest">
                                    OFF
                                </span>
                                <span className="text-[10px] mt-2 tracking-wider opacity-90">
                                    For Online Booking
                                </span>
                            </div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=70"
                            alt="Premium rental car"
                            className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                        />
                    </div>
                    <div className="lg:-mt-8">
                        <BookingWidget />
                    </div>
                </div>
            </section>

            {/* Why choose us */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-5">
                    <SectionHeader
                        title="Why Choose Us"
                        eyebrow="our advantages"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                        {features.map((f) => (
                            <FeatureItem key={f.title} {...f} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicle categories */}
            <section className="py-20 bg-pattern">
                <div className="max-w-7xl mx-auto px-5">
                    <SectionHeader title="Vehicle Categories" light />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {vehicles.map((v) => (
                            <VehicleCard key={v.id} vehicle={v} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-5">
                    <SectionHeader
                        title="What Our Clients Say"
                        eyebrow="testimonials"
                    />
                    <div className="grid md:grid-cols-3 gap-7">
                        {visibleTestimonials.map((t) => (
                            <article
                                key={t.name}
                                className="border border-dashed border-[hsl(var(--ink-soft))]/40 p-7 text-center"
                                data-testid={`testimonial-${t.name
                                    .toLowerCase()
                                    .replace(/\s/g, "-")}`}
                            >
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-20 h-20 rounded-full mx-auto mb-5 object-cover"
                                />
                                <h4 className="font-display text-lg text-teal mb-3">
                                    {t.name}
                                </h4>
                                <p className="text-sm text-[hsl(var(--ink-soft))] leading-relaxed">
                                    {t.text}
                                </p>
                            </article>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-10">
                        <button
                            onClick={() =>
                                setTIndex((v) => (v - 1 + totalPages) % totalPages)
                            }
                            className="w-9 h-9 rounded-full border border-teal/30 hover:bg-coral hover:border-coral hover:text-white transition flex items-center justify-center"
                            data-testid="testimonial-prev"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setTIndex(i)}
                                className={`w-2.5 h-2.5 rounded-full transition ${
                                    i === tIndex
                                        ? "bg-coral"
                                        : "bg-[hsl(var(--ink-soft))]/30"
                                }`}
                                aria-label={`page ${i + 1}`}
                            />
                        ))}
                        <button
                            onClick={() => setTIndex((v) => (v + 1) % totalPages)}
                            className="w-9 h-9 rounded-full border border-teal/30 hover:bg-coral hover:border-coral hover:text-white transition flex items-center justify-center"
                            data-testid="testimonial-next"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

            {/* About strip */}
            <section className="bg-teal text-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2">
                    <div className="px-5 lg:px-12 py-16 flex flex-col justify-center">
                        <p className="font-script text-coral text-2xl mb-2">
                            who we are
                        </p>
                        <h2 className="font-display uppercase text-3xl md:text-4xl mb-6">
                            What Do You Know About Us
                        </h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            Vestibulum id odio a erat gravida sollicitudin.
                            Quisque porttitor turpis sit amet dolor imperdiet,
                            et molestie tellus suscipit. Ut nec odio nisl.
                            Quisque malesuada tortor non erat fermentum, sed
                            sollicitudin nisl sodales.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-8">
                            Pellentesque faucibus viverra massa, vitae tempus
                            nisi venenatis eu. Proin mauris tellus, egestas ac
                            tempor vitae, luctus lobortis nisl.
                        </p>
                        <a
                            href="/about"
                            className="self-start bg-coral text-white px-7 py-4 uppercase tracking-[0.2em] text-xs hover:bg-coral-dark transition"
                            data-testid="our-company-btn"
                        >
                            Our Company
                        </a>
                    </div>
                    <div
                        className="min-h-[360px] bg-cover bg-center"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=70")',
                        }}
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;

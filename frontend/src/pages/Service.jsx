import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FeatureItem from "../components/FeatureItem";
import { services } from "../data/mock";
import { CheckCircle2 } from "lucide-react";

const Service = () => (
    <div data-testid="service-page">
        <PageHero
            title="Our Services"
            subtitle="Everything you need for a smooth, premium rental experience — from quick city pickups to long-term corporate fleets."
            breadcrumb="Home / Service"
        />

        <section className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-5">
                <SectionHeader title="What We Offer" eyebrow="full service" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                    {services.map((s) => (
                        <FeatureItem key={s.title} {...s} />
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 bg-teal text-white">
            <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
                <div
                    className="min-h-[360px] bg-cover bg-center"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=70")',
                    }}
                />
                <div>
                    <p className="font-script text-coral text-2xl mb-2">
                        the process
                    </p>
                    <h2 className="font-display uppercase text-3xl md:text-4xl mb-6">
                        Renting with Motors is Simple
                    </h2>
                    <ul className="space-y-4 text-white/80">
                        {[
                            "Pick your nearest office and rental dates online",
                            "Choose from 50+ vehicles — from economy to luxury",
                            "Confirm in seconds with secure online checkout",
                            "Pick up your spotless car and hit the road",
                        ].map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2
                                    size={20}
                                    className="text-coral mt-0.5 shrink-0"
                                />
                                <span>{step}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    </div>
);

export default Service;

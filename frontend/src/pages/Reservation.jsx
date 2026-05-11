import { useState } from "react";
import PageHero from "../components/PageHero";
import BookingWidget from "../components/BookingWidget";
import VehicleCard from "../components/VehicleCard";
import { vehicles } from "../data/mock";

const filters = ["All", "Economy", "Standard", "Premium", "Speciality", "Minivan", "Convertible"];

const Reservation = () => {
    const [active, setActive] = useState("All");
    const list =
        active === "All"
            ? vehicles
            : vehicles.filter((v) => v.category === active);

    return (
        <div data-testid="reservation-page">
            <PageHero
                title="Reservation"
                subtitle="Pick your dates, choose a vehicle, and we'll have it ready for you."
                breadcrumb="Home / Reservation"
            />

            <section className="py-16 bg-cream">
                <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-[1fr_360px] gap-10">
                    <div>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {filters.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setActive(f)}
                                    className={`px-5 py-2 text-xs uppercase tracking-[0.18em] border transition ${
                                        active === f
                                            ? "bg-coral text-white border-coral"
                                            : "border-teal/20 text-teal hover:border-coral hover:text-coral"
                                    }`}
                                    data-testid={`filter-${f.toLowerCase()}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {list.map((v) => (
                                <VehicleCard key={v.id} vehicle={v} />
                            ))}
                            {list.length === 0 && (
                                <p className="col-span-2 text-center text-[hsl(var(--ink-soft))] py-12">
                                    No vehicles match this category yet.
                                </p>
                            )}
                        </div>
                    </div>
                    <aside className="lg:sticky lg:top-6 self-start">
                        <BookingWidget />
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default Reservation;

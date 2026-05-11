import PageHero from "../components/PageHero";

const sections = [
    {
        title: "1. Rental Agreement",
        body: "By renting a vehicle from Motors, you agree to the terms outlined in this document. The rental agreement constitutes a legally binding contract between you and Motors Local Car Rental.",
    },
    {
        title: "2. Driver Requirements",
        body: "All drivers must be at least 21 years of age and hold a valid driver's license that has been issued for at least 12 months. International renters are required to present a valid passport and an international driving permit when applicable.",
    },
    {
        title: "3. Reservations & Cancellations",
        body: "Reservations may be cancelled up to 48 hours before pickup at no charge. Cancellations made within 48 hours are subject to a fee equivalent to one day of rental.",
    },
    {
        title: "4. Insurance & Liability",
        body: "Basic insurance is included with every rental. Optional zero-deductible coverage and roadside protection plans can be added at the time of booking or pickup.",
    },
    {
        title: "5. Fuel Policy",
        body: "Vehicles are provided with a full tank of fuel and must be returned with a full tank. A refuelling fee plus the cost of fuel will be charged for vehicles returned with less fuel than at pickup.",
    },
    {
        title: "6. Mileage",
        body: "All standard rentals include unlimited mileage within the country of pickup. Cross-border travel must be approved in advance and may be subject to additional fees.",
    },
    {
        title: "7. Damage & Penalties",
        body: "The renter is responsible for any damage to the vehicle that is not covered by the selected insurance plan. Traffic and parking violations remain the responsibility of the renter.",
    },
    {
        title: "8. Privacy",
        body: "We collect only the information necessary to process your reservation and operate our fleet. Your data is never sold to third parties. See our privacy notice for full details.",
    },
];

const Terms = () => (
    <div data-testid="terms-page">
        <PageHero
            title="Terms & Conditions"
            subtitle="Please read carefully — these terms apply to every reservation made with Motors."
            breadcrumb="Home / Terms"
        />
        <section className="py-16 bg-cream">
            <div className="max-w-3xl mx-auto px-5 space-y-8">
                {sections.map((s) => (
                    <article
                        key={s.title}
                        className="bg-white p-7 border-l-4 border-coral shadow-sm"
                    >
                        <h3 className="font-display uppercase text-lg text-teal mb-3 tracking-wide">
                            {s.title}
                        </h3>
                        <p className="text-sm text-[hsl(var(--ink-soft))] leading-relaxed">
                            {s.body}
                        </p>
                    </article>
                ))}
                <p className="text-xs text-[hsl(var(--ink-soft))] text-center pt-4">
                    Last updated · {new Date().toLocaleDateString()}
                </p>
            </div>
        </section>
    </div>
);

export default Terms;

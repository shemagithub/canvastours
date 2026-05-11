import { useState } from "react";
import PageHero from "../components/PageHero";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { offices } from "../data/mock";

const Contacts = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [sent, setSent] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div data-testid="contacts-page">
            <PageHero
                title="Contacts"
                subtitle="Get in touch — we usually reply within an hour during office hours."
                breadcrumb="Home / Contacts"
            />

            {/* Offices */}
            <section className="py-20 bg-cream">
                <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-6">
                    {offices.map((o) => (
                        <article
                            key={o.city}
                            className="bg-white p-7 border-t-4 border-coral shadow-sm hover:-translate-y-1 transition"
                            data-testid={`office-${o.city
                                .toLowerCase()
                                .replace(/\s/g, "-")}`}
                        >
                            <h3 className="font-display uppercase text-lg text-teal tracking-wide">
                                {o.city}
                            </h3>
                            <div className="w-10 h-[2px] bg-coral my-4" />
                            <p className="text-sm text-[hsl(var(--ink-soft))] flex items-start gap-2 mb-3">
                                <MapPin
                                    size={15}
                                    className="text-coral mt-0.5 shrink-0"
                                />
                                {o.address}
                            </p>
                            <p className="text-sm text-[hsl(var(--ink-soft))] flex items-center gap-2">
                                <Phone
                                    size={15}
                                    className="text-coral shrink-0"
                                />
                                {o.phone}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Form + info */}
            <section className="py-20 bg-teal text-white">
                <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-[1fr_1.4fr] gap-12">
                    <div>
                        <p className="font-script text-coral text-2xl mb-1">
                            say hello
                        </p>
                        <h2 className="font-display uppercase text-3xl md:text-4xl mb-6">
                            We'd Love to Hear From You
                        </h2>
                        <p className="text-white/70 leading-relaxed mb-8">
                            Questions about a reservation, a custom corporate
                            plan, or just want to say hi? Drop us a message and
                            our team will get back to you in no time.
                        </p>
                        <ul className="space-y-4 text-white/80 text-sm">
                            <li className="flex items-center gap-3">
                                <span className="w-9 h-9 rounded-full bg-coral flex items-center justify-center">
                                    <Phone size={14} />
                                </span>
                                +1 878-9671-4455
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-9 h-9 rounded-full bg-coral flex items-center justify-center">
                                    <Mail size={14} />
                                </span>
                                hello@motors.rent
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-9 h-9 rounded-full bg-coral flex items-center justify-center">
                                    <MapPin size={14} />
                                </span>
                                1010 Moon Ave, New York, NY US
                            </li>
                        </ul>
                    </div>

                    <form
                        onSubmit={submit}
                        className="bg-white text-teal p-8 shadow-2xl"
                        data-testid="contact-form"
                    >
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-xs uppercase tracking-[0.18em] mb-2">
                                    Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full bg-cream border-b-2 border-coral/30 focus:border-coral outline-none px-3 py-3 text-sm transition"
                                    data-testid="contact-name"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-[0.18em] mb-2">
                                    Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            email: e.target.value,
                                        })
                                    }
                                    className="w-full bg-cream border-b-2 border-coral/30 focus:border-coral outline-none px-3 py-3 text-sm transition"
                                    data-testid="contact-email"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-xs uppercase tracking-[0.18em] mb-2">
                                Subject
                            </label>
                            <input
                                required
                                type="text"
                                value={form.subject}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        subject: e.target.value,
                                    })
                                }
                                className="w-full bg-cream border-b-2 border-coral/30 focus:border-coral outline-none px-3 py-3 text-sm transition"
                                data-testid="contact-subject"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-xs uppercase tracking-[0.18em] mb-2">
                                Message
                            </label>
                            <textarea
                                required
                                rows="6"
                                value={form.message}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        message: e.target.value,
                                    })
                                }
                                className="w-full bg-cream border-b-2 border-coral/30 focus:border-coral outline-none px-3 py-3 text-sm transition resize-none"
                                data-testid="contact-message"
                            />
                        </div>
                        <div className="flex items-center justify-between flex-wrap gap-3">
                            <button
                                type="submit"
                                className="bg-coral text-white px-7 py-4 uppercase tracking-[0.2em] text-xs hover:bg-coral-dark transition inline-flex items-center gap-2"
                                data-testid="contact-submit"
                            >
                                <Send size={14} /> Send Message
                            </button>
                            {sent && (
                                <span className="text-coral text-sm font-medium">
                                    ✓ Message sent — we'll be in touch.
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </section>

            {/* Map */}
            <section
                className="h-[420px] bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=70")',
                }}
                aria-label="Office locations map"
            />
        </div>
    );
};

export default Contacts;

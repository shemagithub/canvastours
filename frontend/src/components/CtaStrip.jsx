import { Phone, Mail } from "lucide-react";

const CtaStrip = () => (
    <section className="cta-strip" data-testid="cta-strip">
        <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide">
                Have a Questions? Feel free to ask…
            </h3>
            <div className="flex items-center gap-6">
                <span className="flex items-center gap-3 text-lg font-display">
                    <span className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                        <Phone size={16} />
                    </span>
                    +1 878-9674-4455
                </span>
                <button className="flex items-center gap-2 px-6 py-3 border-2 border-white uppercase tracking-[0.18em] text-xs hover:bg-white hover:text-coral transition" data-testid="feedback-btn">
                    <Mail size={14} /> Feedback
                </button>
            </div>
        </div>
    </section>
);

export default CtaStrip;

import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-teal-dark text-white" data-testid="site-footer">
            <div className="max-w-7xl mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <Link to="/" className="flex flex-col leading-none mb-5">
                        <span className="font-display text-3xl">
                            <span className="text-coral">m</span>otors
                        </span>
                        <span className="font-script text-coral text-sm -mt-1 ml-7">
                            Local car rental
                        </span>
                    </Link>
                    <p className="text-white/65 text-sm leading-relaxed">
                        Premium local car rental with transparent pricing,
                        modern fleet and 24/7 roadside support across every
                        location we serve.
                    </p>
                    <div className="flex items-center gap-3 mt-5 text-white/70">
                        {[Facebook, Twitter, Instagram, Linkedin].map(
                            (Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-coral hover:border-coral hover:text-white transition"
                                >
                                    <Icon size={14} />
                                </a>
                            ),
                        )}
                    </div>
                </div>

                <div>
                    <h4 className="font-display uppercase tracking-[0.18em] text-sm mb-5 text-coral">
                        Company
                    </h4>
                    <ul className="space-y-3 text-sm text-white/70">
                        <li>
                            <Link to="/about" className="hover:text-coral">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/service" className="hover:text-coral">
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" className="hover:text-coral">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts" className="hover:text-coral">
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-display uppercase tracking-[0.18em] text-sm mb-5 text-coral">
                        Reservation
                    </h4>
                    <ul className="space-y-3 text-sm text-white/70">
                        <li>
                            <Link
                                to="/reservation"
                                className="hover:text-coral"
                            >
                                Book a Vehicle
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/reservation"
                                className="hover:text-coral"
                            >
                                Vehicle Categories
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/reservation"
                                className="hover:text-coral"
                            >
                                Long-term Rental
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/reservation"
                                className="hover:text-coral"
                            >
                                Corporate Plans
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-display uppercase tracking-[0.18em] text-sm mb-5 text-coral">
                        Get in Touch
                    </h4>
                    <ul className="space-y-3 text-sm text-white/70">
                        <li className="flex items-start gap-3">
                            <MapPin
                                size={16}
                                className="text-coral mt-0.5 shrink-0"
                            />
                            1010 Moon Ave, New York, NY US
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone
                                size={16}
                                className="text-coral shrink-0"
                            />
                            +1 878-9671-4455
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail
                                size={16}
                                className="text-coral shrink-0"
                            />
                            hello@motors.rent
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
                    <span>
                        © {new Date().getFullYear()} Motors — Local Car Rental.
                        All rights reserved.
                    </span>
                    <span>
                        Designed with care · Built for the open road.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

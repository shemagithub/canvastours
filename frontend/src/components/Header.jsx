import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import {
    Phone,
    MapPin,
    Clock,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    User,
    Menu,
    X,
} from "lucide-react";

const navItems = [
    { to: "/", label: "Home" },
    { to: "/reservation", label: "Reservation" },
    { to: "/service", label: "Service" },
    { to: "/terms", label: "Terms" },
    { to: "/about", label: "About Us" },
    { to: "/contacts", label: "Contacts" },
];

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full" data-testid="site-header">
            {/* Top bar */}
            <div className="bg-teal-dark text-white text-[12px]">
                <div className="max-w-7xl mx-auto px-5 py-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
                        <span className="flex items-center gap-2">
                            <Phone size={14} className="text-coral" />
                            +1 212-226-3126
                        </span>
                        <span className="hidden sm:flex items-center gap-2">
                            <MapPin size={14} className="text-coral" />
                            1010 MOON AVE, NEW YORK, NY US
                        </span>
                        <span className="hidden md:flex items-center gap-2">
                            <Clock size={14} className="text-coral" />
                            MON – SAT 8.00 – 18.00
                        </span>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="hidden sm:flex items-center gap-3 text-white/70">
                            <a
                                href="#"
                                className="hover:text-coral transition"
                                data-testid="social-fb"
                            >
                                <Facebook size={14} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-coral transition"
                                data-testid="social-tw"
                            >
                                <Twitter size={14} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-coral transition"
                                data-testid="social-ig"
                            >
                                <Instagram size={14} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-coral transition"
                                data-testid="social-li"
                            >
                                <Linkedin size={14} />
                            </a>
                        </div>
                        <div className="flex items-center gap-3 uppercase tracking-wider text-[11px]">
                            <button
                                className="flex items-center gap-1 hover:text-coral transition"
                                data-testid="login-btn"
                            >
                                <User size={13} /> Login
                            </button>
                            <span className="text-white/30">/</span>
                            <button
                                className="hover:text-coral transition"
                                data-testid="register-btn"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <div className="bg-teal text-white">
                <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between gap-6">
                    <Link
                        to="/"
                        className="flex flex-col leading-none"
                        data-testid="logo"
                    >
                        <span className="font-display text-3xl md:text-4xl">
                            <span className="text-coral">m</span>otors
                        </span>
                        <span className="font-script text-coral text-sm -mt-1 ml-7">
                            Local car rental
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8 uppercase text-[13px] tracking-[0.18em] font-medium">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                className={({ isActive }) =>
                                    `nav-link transition hover:text-coral ${
                                        isActive ? "active text-coral" : ""
                                    }`
                                }
                                data-testid={`nav-${item.label
                                    .toLowerCase()
                                    .replace(/\s/g, "-")}`}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-coral flex items-center justify-center">
                            <Phone size={16} />
                        </span>
                        <span className="font-display text-xl md:text-2xl">
                            878-9671-4455
                        </span>
                    </div>

                    <button
                        className="lg:hidden w-10 h-10 rounded bg-coral flex items-center justify-center"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                        data-testid="mobile-menu-toggle"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {open && (
                    <div className="lg:hidden border-t border-white/10 bg-teal-dark">
                        <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-3 uppercase tracking-[0.18em] text-[13px]">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    end={item.to === "/"}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `py-2 border-b border-white/5 ${
                                            isActive
                                                ? "text-coral"
                                                : "text-white"
                                        }`
                                    }
                                    data-testid={`mobile-nav-${item.label
                                        .toLowerCase()
                                        .replace(/\s/g, "-")}`}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

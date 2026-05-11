import { useState } from "react";
import { ChevronDown, Calendar, MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const offices = [
    "New York – Moon Ave",
    "Los Angeles – Sunset Blvd",
    "Miami – Ocean Dr",
    "Chicago – Lake Shore Dr",
];

const BookingWidget = ({ compact = false }) => {
    const [pickup, setPickup] = useState("");
    const [returnSame, setReturnSame] = useState(true);
    const [returnLoc, setReturnLoc] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [pickupOpen, setPickupOpen] = useState(false);
    const [returnOpen, setReturnOpen] = useState(false);
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        navigate("/reservation");
    };

    return (
        <form
            onSubmit={submit}
            className={`bg-coral text-white p-7 md:p-8 ${
                compact ? "" : "shadow-xl"
            }`}
            data-testid="booking-widget"
        >
            <h3 className="font-display text-xs tracking-[0.2em] uppercase mb-3">
                Pick Up
            </h3>
            <div className="relative mb-4">
                <button
                    type="button"
                    onClick={() => setPickupOpen((v) => !v)}
                    className="w-full bg-white text-teal flex items-center justify-between px-4 py-3 text-sm"
                    data-testid="pickup-select"
                >
                    <span className="flex items-center gap-2">
                        <MapPin size={15} className="text-coral" />
                        {pickup || "Choose office"}
                    </span>
                    <ChevronDown size={16} />
                </button>
                {pickupOpen && (
                    <ul className="absolute z-20 left-0 right-0 mt-1 bg-white text-teal text-sm shadow-lg max-h-56 overflow-auto">
                        {offices.map((o) => (
                            <li
                                key={o}
                                className="px-4 py-2.5 hover:bg-coral-soft cursor-pointer border-b border-black/5 last:border-0"
                                onClick={() => {
                                    setPickup(o);
                                    setPickupOpen(false);
                                }}
                            >
                                {o}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <label className="flex items-center gap-2 text-sm mb-4 cursor-pointer select-none">
                <input
                    type="checkbox"
                    checked={returnSame}
                    onChange={(e) => setReturnSame(e.target.checked)}
                    className="w-4 h-4 accent-white"
                    data-testid="return-same-checkbox"
                />
                Return to the same location
            </label>

            {!returnSame && (
                <div className="relative mb-4">
                    <button
                        type="button"
                        onClick={() => setReturnOpen((v) => !v)}
                        className="w-full bg-white text-teal flex items-center justify-between px-4 py-3 text-sm"
                    >
                        <span className="flex items-center gap-2">
                            <MapPin size={15} className="text-coral" />
                            {returnLoc || "Choose return office"}
                        </span>
                        <ChevronDown size={16} />
                    </button>
                    {returnOpen && (
                        <ul className="absolute z-20 left-0 right-0 mt-1 bg-white text-teal text-sm shadow-lg max-h-56 overflow-auto">
                            {offices.map((o) => (
                                <li
                                    key={o}
                                    className="px-4 py-2.5 hover:bg-coral-soft cursor-pointer border-b border-black/5 last:border-0"
                                    onClick={() => {
                                        setReturnLoc(o);
                                        setReturnOpen(false);
                                    }}
                                >
                                    {o}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            <div className="bg-white text-teal flex items-center px-4 py-3 mb-6">
                <Calendar size={15} className="text-coral mr-2" />
                <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="bg-transparent w-full outline-none text-sm"
                    placeholder="Pickup Date"
                    data-testid="pickup-date"
                />
            </div>

            <h3 className="font-display text-xs tracking-[0.2em] uppercase mb-3">
                Return
            </h3>
            <div className="bg-white text-teal flex items-center px-4 py-3 mb-7">
                <Calendar size={15} className="text-coral mr-2" />
                <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="bg-transparent w-full outline-none text-sm"
                    placeholder="Return Date"
                    data-testid="return-date"
                />
            </div>

            <button
                type="submit"
                className="bg-teal text-white uppercase tracking-[0.2em] text-xs px-7 py-4 inline-flex items-center gap-3 hover:bg-teal-dark transition"
                data-testid="find-vehicle-btn"
            >
                Find a Vehicle <ArrowRight size={14} />
            </button>
        </form>
    );
};

export default BookingWidget;

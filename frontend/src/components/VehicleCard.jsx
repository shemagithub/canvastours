import { Snowflake, Briefcase, DoorOpen, Armchair } from "lucide-react";

const VehicleCard = ({ vehicle }) => (
    <article
        className="vehicle-card flex flex-col"
        data-testid={`vehicle-${vehicle.id}`}
    >
        <div className="p-7 flex justify-between items-start gap-4">
            <div>
                <h3 className="font-display text-xl text-teal mb-1 uppercase">
                    {vehicle.category}
                </h3>
                <p className="text-sm text-[hsl(var(--ink-soft))]">
                    {vehicle.name}
                </p>
            </div>
            <ul className="text-sm text-[hsl(var(--ink-soft))] space-y-1.5 shrink-0">
                <li className="flex items-center gap-2">
                    <Armchair size={15} className="text-coral" />
                    {vehicle.seats} Seats
                </li>
                <li className="flex items-center gap-2">
                    <Briefcase size={15} className="text-coral" />
                    {vehicle.bags} Bags
                </li>
                <li className="flex items-center gap-2">
                    <DoorOpen size={15} className="text-coral" />
                    {vehicle.doors} Doors
                </li>
                <li className="flex items-center gap-2">
                    <Snowflake size={15} className="text-coral" />
                    A/C
                </li>
            </ul>
        </div>
        <div className="px-7">
            <div className="price-tag">
                <span className="from">FROM</span>
                <span>
                    <span className="amount">${vehicle.price}</span>
                    <span className="per">/DAY</span>
                </span>
            </div>
        </div>
        <div className="mt-auto p-4 flex items-end justify-center min-h-[180px]">
            <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full max-h-44 object-contain"
                loading="lazy"
            />
        </div>
    </article>
);

export default VehicleCard;

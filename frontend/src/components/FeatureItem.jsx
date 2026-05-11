import {
    ThumbsUp,
    Award,
    MapPin,
    Baby,
    Cog,
    Headphones,
    Car,
    Plane,
    Briefcase,
    Shield,
    Map,
    Wrench,
} from "lucide-react";

const map = {
    ThumbsUp,
    Award,
    MapPin,
    Baby,
    Cog,
    Headphones,
    Car,
    Plane,
    Briefcase,
    Shield,
    Map,
    Wrench,
};

const FeatureItem = ({ icon, title, text }) => {
    const Icon = map[icon] || ThumbsUp;
    return (
        <div className="flex gap-5">
            <div className="feature-icon">
                <Icon size={24} />
            </div>
            <div>
                <h3 className="font-display text-xl text-teal mb-2 uppercase tracking-wide">
                    {title}
                </h3>
                <p className="text-sm text-[hsl(var(--ink-soft))] leading-relaxed">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default FeatureItem;

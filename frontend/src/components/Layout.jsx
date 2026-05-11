import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CtaStrip from "./CtaStrip";

const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col bg-cream">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <CtaStrip />
            <Footer />
        </div>
    );
};

export default Layout;

import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Service from "./pages/Service";
import Terms from "./pages/Terms";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/reservation"
                            element={<Reservation />}
                        />
                        <Route path="/service" element={<Service />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
    );
};

export default AppRoutes;


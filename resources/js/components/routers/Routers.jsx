import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageDashboard from "../views/private/PageDashboard/PageDashboard";
import PageHome from "../views/private/PageHome/PageHome";
import PageAbout from "../views/private/PageAbout/PageAbout";
import PageContactUs from "../views/private/PageContactUs/PageContactUs";
import PageLogin from "../views/public/PageLogin/PageLogin";
// import PageQuote from "../views/private/PageQuote/PageQuote";
import PageUsers from "../views/private/PageUsers/PageUsers";
import PageAddUser from "../views/private/PageUsers/PageAddUser";

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageLogin/>} />

                <Route path="/home" element={<PageHome />} />

                <Route path="/about" element={<PageAbout />} />

                <Route path="/dashboard" element={<PageDashboard />} />

                <Route path="/contact" element={<PageContactUs />} />

                {/* <Route path="/quotes" element={<PageQuote/>} /> */}

                <Route path="/users" element={<PageUsers/>} />

                <Route path="/addNewUser" element={<PageAddUser />} />
            </Routes>
        </Router>
    );
}

createRoot(document.getElementById("root")).render(<Routers />);

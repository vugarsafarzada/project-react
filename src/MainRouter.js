import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";

//Pages
import Error from "./pages/Error";
import Invoices from "./pages/Invoices";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

export default function MainRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/invoices" element={<Invoices/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )

}
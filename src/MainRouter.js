import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";

//Pages
import Error from "./pages/Error";
import Restaurants from "./pages/Restaurants";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

export default function MainRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/discovery" element={<Home/>}/>
            <Route path="/restaurants" element={<Restaurants/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )

}
import React from 'react';
import '../styles/component/Header.css'
import {Link} from "react-router-dom";
import HeaderNavbar from "./HeaderNavbar";

export default function Header() {
    return (
        <div className="header">
            <div className='header-container'>
                <div>
                    <h2 className="">{process.env.REACT_APP_PROJECT_NAME}</h2>
                </div>
                <div className="search">

                </div>
            </div>
            <HeaderNavbar/>
        </div>
    )

}

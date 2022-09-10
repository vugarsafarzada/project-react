import React from 'react';
import '../styles/component/Header.css'
import HeaderNavbar from "./HeaderNavbar";
import Searchbox from "./Searchbox";

import {Link} from "react-router-dom";
import { FaUserLock } from "react-icons/fa";

export default function Header() {
    return (
        <div className="header">
            <div className='header-container'>
                <div className='title-box no-select'>
                    <Link to='/' className="title">{process.env.REACT_APP_PROJECT_NAME}</Link>
                </div>
                <div className="search">
                    <Searchbox/>
                </div>
                <div className="login-box no-select">
                    <Link className="login" to='/login'>
                         <FaUserLock/> <span className="m-1">Login</span>
                    </Link>
                </div>
            </div>
            <HeaderNavbar/>
        </div>
    )

}

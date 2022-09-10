import React from 'react';
import '../styles/component/Header.css'
import HeaderNavbar from "./HeaderNavbar";
import Searchbox from "./Searchbox";

import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <div className='header-container flex-row-space-between-center'>
                <div className='title-box no-select'>
                    <Link to='/' className="title">{process.env.REACT_APP_PROJECT_NAME}</Link>
                </div>
                <div className="search">
                    <Searchbox/>
                </div>
                <div className="login-box flex-row-center-center no-select">
                    <Link className="login flex-row-space-between-center" to='/login'>
                         <span className="m-1">Log in</span>
                    </Link>
                    <Link className="signup flex-row-space-between-center" to='/signup'>
                         <span className="m-1">Sign up</span>
                    </Link>
                </div>
            </div>
            <HeaderNavbar/>
        </div>
    )

}

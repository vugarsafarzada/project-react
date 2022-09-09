import React from 'react';
import '../styles/component/HeaderNavbar.css'
import {Link} from "react-router-dom";

export default function HeaderNavbar(){
    return(
        <div className="header-navbar-container">
            <Link to={'/'}>Home</Link>
            <Link to={'/about-us'}>About</Link>
            <Link to={'/invoices'}>Invoices</Link>
        </div>
    )
}
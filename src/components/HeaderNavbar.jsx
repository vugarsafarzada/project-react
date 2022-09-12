import React from 'react';
import '../styles/component/HeaderNavbar.css'
import {Link} from "react-router-dom";
import {BiRestaurant} from "react-icons/bi";
import {GoTelescope} from "react-icons/go";
import {BsInfoCircleFill} from "react-icons/bs";

export default function HeaderNavbar(){
    return(
        <div className="header-navbar-container flex-row-start-center no-select">
            <Link to={'/'}>
                <GoTelescope className='m-1'/>
                Discovery
            </Link>
            <Link to={'/restaurants'}>
                <BiRestaurant className='m-1'/> Restaurants
            </Link>
            <Link to={'/about-us'}>
                <BsInfoCircleFill className='m-1'/>
                About us
            </Link>
        </div>
    )
}
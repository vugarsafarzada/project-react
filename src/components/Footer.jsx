import React from 'react';
import '../styles/component/Footer.css'

import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../store/posts";
import { useEffect } from "react";

export default function Footer() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.list);
    console.log(posts);
    useEffect(() => {
        dispatch(loadposts());
    }, [dispatch]);

    return(
        <div className="footer-container">
            <h2>Footer</h2>
            <h1>Posts</h1>
            <ul>
            </ul>
        </div>
    )
}
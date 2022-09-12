import React, {useState, useEffect} from 'react';
import {GiCook} from 'react-icons/gi'
import {FcShop} from 'react-icons/fc';

import "../styles/page/Home.css"
import PictureCarousel from "../components/PictureCarousel";

export default function Home() {
    const [picCarouselData, setPictureCarouselData] = useState([]);

    async function getPictureCarouselData(){
        let res = await fetch('http://localhost:8000/animals')
        let data = await res.json().then((data) => {
            return data?.restaurants;
        })
        if(data.length){
            setPictureCarouselData(data);
        }
    }
    useEffect(()=>{
        getPictureCarouselData()
    }, []);

    return (
        <div className="page-container home-container">
            <div className="intro-section flex-row-space-between-center">
                <div className="intro-text">
                    <h1 className="flex-row-start-center">
                        <GiCook color="var(--color-header-background)"/> Welcome to {process.env.REACT_APP_PROJECT_NAME}!
                    </h1>
                    <span>
                        Let's book a restaurant, below is a selection of restaurants and special deals specially selected for you.
                    </span>
                </div>
                <div className="intro-img flex-row-center-center">
                    <FcShop size="500px"/>
                </div>
            </div>
            <div className="pic-carousel-section">
                <PictureCarousel autoCycle='5' items={picCarouselData}/>
            </div>
            <div className="category-section">
            </div>
            <div className="free-reserves-section"></div>
            <div className="top-rated-section"></div>
            <div className="new-restaurants-section"></div>
        </div>
    )
}
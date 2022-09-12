import {React, useState, useEffect} from 'react';
import '../styles/component/PictureCarousel.css'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

export default function PictureCarousel(props) {
    const [carousel, setCarousel] = useState(0)
    const [itemWidth, setItemWidth] = useState(600)
    const [autoCycle, setAutoCycle] = useState(false);
    const [userClick, setUserClick] = useState(false);
    const [carouselElementLimit, setCarouselElementLimit] = useState();
    const [itemsLength, setItemsLength] = useState(0);
    const [carouselData, setCarouselData] = useState([]);
    const [carouselIntervalId, setCarouselIntervalId] = useState();


    function carouselLeft(e) {
        let calc = carousel + itemWidth + 20
        if (calc < 0) {
            setCarousel(calc)
        } else {
            setCarousel(0)
        }
    }

    function carouselRight(e) {
        let calc = carousel - itemWidth + 20;
        let maxCarouselLimit = itemsLength * (itemWidth + 20) - (itemWidth + 20) * 2;
        if (calc > maxCarouselLimit * (-1)) {
            setCarousel(calc)
        } else {
            setCarousel(0)
        }
    }

    function carouselInterval() {
        if (autoCycle) {
            let interval_carusel = setInterval(() => {
                carouselRight();
                clearInterval(interval_carusel);
            }, autoCycle * 1000)
            setCarouselIntervalId(interval_carusel);
        }
    }
    useEffect(() => {
        clearInterval(carouselIntervalId);
        if (autoCycle) {
            carouselInterval();
        }
    }, [carousel, autoCycle, carouselData]);

    useEffect(() => {
        setAutoCycle(props.autoCycle);
    }, [props.autoCycle])

    useEffect(() => {
        if (userClick) {
            clearInterval(carouselIntervalId);
            setAutoCycle(false);
            let timeout = setTimeout(() => {
                setAutoCycle(props.autoCycle);
                setUserClick(false);
                clearTimeout(timeout)
            }, 5000)
        }
    }, [userClick])

    useEffect(() => {
        setCarouselData(props.items);
        setItemsLength(props.items.length)
    }, [props.items])

    useEffect(() => {
        const el = document.getElementById('carousel-items');
        setCarouselElementLimit(el.clientWidth);
    }, [carouselData])

    return (
        <div style={{display: carouselData ? 'null' : 'none'}} id='carousel-container'
             className="no-select carousel-container flex-column-center-flex-start">
            <div className="arrows flex-row-space-between-center">
                <div className="left-arrow"
                     onClick={(e) => {
                         carouselLeft(e)
                         setUserClick(true)
                     }}>
                    <AiOutlineArrowLeft size="30px"/>
                </div>
                <div
                    className="right-arrow"
                    onClick={(e) => {
                        carouselRight(e)
                        setUserClick(true)
                    }}>
                    <AiOutlineArrowRight size="30px"/>
                </div>
            </div>
            <div style={{left: carousel}} className="carousel-items" id='carousel-items'>
                {
                    carouselData.map((item)=>{
                        return  <div key={item.blurhash} style={{width: itemWidth}} className="cars-item">{item.name}</div>
                    })
                }
            </div>
        </div>
    )
}
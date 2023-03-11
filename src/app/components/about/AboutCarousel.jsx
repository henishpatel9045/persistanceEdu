import React, {useState, useEffect, useRef, useContext } from 'react'
import { Carousel } from 'react-bootstrap'

import Pagination from '../Pagination';
import "../components.scss"
import { AboutContext } from '../../context/SiteContext';
 
function AboutCarousel() {
    const [currPage, setCurrPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [imageData, setImageData] = useState([]);
    const {carouImageData:data} = useContext(AboutContext);

    useEffect(() => {
        setImageData(data?.map((item, index) =>
            <Carousel.Item className="carousel-img" key={index} >
                <img src={item?.src} className="carousel-img" />
            </Carousel.Item>));
        setTotalPages(data?.length);
        setCurrPage(1);
    }, [data])

    const currRef = useRef(null);

    const handleNext = () => {
        currRef?.current?.next();
        if (currPage < totalPages) {
            setCurrPage(currPage + 1);
        }
    }

    const handlePrev = () => {
        currRef?.current?.prev();
        if (currPage > 1) {
            setCurrPage(currPage - 1);
        }
    }

    return (
        <div className='carousel-main' style={{

        }}>
            <Carousel
                ref={currRef}
                onSlide={(e) => setCurrPage(e + 1)}
                fade
                id='about-carousel'
                indicators={false}
                prevIcon={<div></div>}
                nextIcon={<div></div>}>
                {imageData}
            </Carousel>
            <Pagination currPage={currPage} totalPages={totalPages} next={handleNext} prev={handlePrev} />
        </div>

    )
}

export default AboutCarousel
import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from 'react-bootstrap'

import SQ from "../assets/pic-sq.svg";

import "./components.scss"
import Pagination from './Pagination'

function HeaderIMG({data}) {
    const [currPage, setCurrPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        setImageData(data.map((item, index) =>
            <Carousel.Item className="carousel-img" key={index} >
                <img src={item?.src} className="carousel-img" />
            </Carousel.Item>));
        setTotalPages(data.length);
        setCurrPage(1);
    }, [])

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
            <img src={SQ} className='ellipse' />
            <Carousel
                ref={currRef}
                onSlide={(e) => setCurrPage(e + 1)}
                fade
                className='carousel-container'
                indicators={false}
                prevIcon={<div></div>}
                nextIcon={<div></div>}>
                {imageData}
            </Carousel>
            <Pagination currPage={currPage} totalPages={totalPages} next={handleNext} prev={handlePrev} />
        </div>
    )
}

export default HeaderIMG
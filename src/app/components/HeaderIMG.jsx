import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from 'react-bootstrap'

import "./components.scss"

import I1 from "../assets/i1.jpg"
import I2 from "../assets/i2.jpg"
import I3 from "../assets/i3.jpg"
import Pagination from './Pagination'

function HeaderIMG() {
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(3);

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
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "1rem"
        }}>
            <Carousel
                ref={currRef}
                onSlide={(e) => setCurrPage(e+1)}
                fade
                className='carousel-container'
                indicators={false}
                prevIcon={<div></div>}
                nextIcon={<div></div>}>
                <Carousel.Item >
                    <img src={I1} alt="" className="carousel-img" />
                </Carousel.Item>
                <Carousel.Item >
                    <img src={I2} alt="" className="carousel-img" />
                </Carousel.Item>
                <Carousel.Item >
                    <img src={I3} alt="" className="carousel-img" />
                </Carousel.Item>
            </Carousel>
            <Pagination currPage={currPage} totalPages={totalPages} next={handleNext} prev={handlePrev} />
        </div>
    )
}

export default HeaderIMG
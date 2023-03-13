import React, { useContext, useEffect, useRef, useState } from 'react'
import { Carousel } from 'react-bootstrap'

import SQ from "../assets/pic-sq.svg";
import { HomeContext } from '../context/SiteContext';

import "./components.scss"
import ImageOverlay from './ImageOverlay';
import Pagination from './Pagination'

function HeaderIMG() {
    const [currPage, setCurrPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [imageData, setImageData] = useState([]);
    const {carouImageData} = useContext(HomeContext);
    const [show, setShow] = useState(false);
    const [src, setSrc] = useState(null);

    useEffect(() => {
        setImageData(carouImageData?.map((item, index) =>
            <Carousel.Item className="carousel-img" key={index} >
                <img src={item?.image} className="carousel-img" onClick={() => {
                    setShow(true)
                    setSrc(item?.image)
                }} />
            </Carousel.Item>));
        setTotalPages(carouImageData?.length);
        setCurrPage(carouImageData?.length > 0 ? 1 : 0);
    }, [carouImageData])

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
                interval={1500}
                ref={currRef}
                onSlide={(e) => setCurrPage(e + 1)}
                fade
                className='carousel-container'
                indicators={false}
                prevIcon={<div></div>}
                nextIcon={<div></div>}>
                {imageData}
            </Carousel>
            <ImageOverlay setShow={setShow} src={src} show={show} />
            <Pagination currPage={currPage} totalPages={totalPages} next={handleNext} prev={handlePrev} />
        </div>
    )
}

export default HeaderIMG
import React from 'react'
import "./components.scss";
import ARROW from "../assets/corousel-btn.png"

function CarouselBtn({ onClick=() => {}, left, disabled }) {
    return (
        <button onClick={onClick} className="carousel-btn">
            <div className={left ? "carousel-btn-left" : "carousel-btn-right"} >
                <img src={ARROW} alt={left ? "Prev" : "Next"} style={{
                    opacity: disabled ? 0.5 : 1,
                }} />
            </div>
        </button>
    )
}

export default CarouselBtn
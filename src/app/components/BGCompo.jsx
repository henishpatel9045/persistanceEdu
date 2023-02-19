import React from 'react'
import STAR from "../assets/star.svg"
import SQUARE from "../assets/bg-square.svg"
import "./components.scss"

function BGCompo({ stars = true, squares = true }) {
    return (
        <div className='bg-compo'>
            {stars && <>
                <img src={STAR} className="bg-star-1" />
                <img src={STAR} className="bg-star-2" />
            </>}
            {squares && <>
                <img src={SQUARE} className="bg-sq-1" />
                <img src={SQUARE} className="bg-sq-2" />
                <img src={SQUARE} className="bg-sq-3" />
                <img src={SQUARE} className="bg-sq-4" />
                <img src={SQUARE} className="bg-sq-5" />
                <img src={SQUARE} className="bg-sq-6" />
            </>}
        </div>
    )
}

export default BGCompo
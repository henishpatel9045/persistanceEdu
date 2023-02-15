import React from 'react'
import "./components.scss";

function AnimatedBG({children}) {
    return (
        <div className="area" >
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            {children}
        </div>
    )
}

export default AnimatedBG
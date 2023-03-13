import React from 'react'
import DOME from "../../assets/ar-dome.svg"
import "../components.scss"

function AResultCard({image, name, title, subtitle}) {
  return (
    <div className='ar-card'>
        {/* <img src={DOME} alt="Dome" className='dome' /> */}
        <img src={image} alt={name} />
        <div>
            <h4>
                {name}
            </h4>
            <h5>{title}</h5>
            <h5>{subtitle}</h5>
        </div>
    </div>
  )
}

export default AResultCard
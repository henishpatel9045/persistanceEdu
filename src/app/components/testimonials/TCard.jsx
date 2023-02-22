import React from 'react'
import QMARK from "../../assets/q-mark.svg"
import "../components.scss"

function TCard({image, name="", subtitle="", content=""}) {
  return (
    <div className="t-card">
        <img src={QMARK} alt="q-mark" className='q-mark' />
        <p>
            {content}
        </p>
        <div>
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <h5>{subtitle}</h5>
            </div>
        </div>
    </div>
  )
}

export default TCard
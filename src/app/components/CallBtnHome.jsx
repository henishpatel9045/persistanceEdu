import React from 'react'
import CALL from "../assets/call-btn.svg"
import "./components.scss"

function CallBtnHome({tel}) {
  return (
    <div className='program-contact'>
        <h6>Contact For Admission</h6>
        <a href={`tel:${tel}`}>
            <img src={CALL} alt="" />
        </a>
    </div>
  )
}

export default CallBtnHome
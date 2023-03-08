import React from 'react'
import CALL from "../assets/call-btn.svg"
import "./components.scss"

function CallBtnHome({onClick}) {
  return (
    <div className='program-contact'>
        <h6>Contact For Admission</h6>
        <button onClick={onClick}>
            <img src={CALL} alt="" />
        </button>
    </div>
  )
}

export default CallBtnHome
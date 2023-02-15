import React from 'react'
import "./components.scss"


function ButtonBase({ title, onClick = () => console.log() }) {
  return (
    <button className="primary-btn" onClick={onClick} >{title}</button>
  )
}

export default ButtonBase
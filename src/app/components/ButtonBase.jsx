import React from 'react'
import "./components.scss"


function ButtonBase({ title, href }) {
  return (
    <a className="primary-btn" href={href} >{title}</a>
  )
}

export default ButtonBase
import React from 'react'
import "./components.scss";

function TextOpacityBG({ children, left, className = "", style = {} }) {
  return (
    <span className={left ? 'text-opac-mixin-left ' + className : 'text-opac-mixin-right ' + className} style={style}>{children}</span>
  )
}

export default TextOpacityBG
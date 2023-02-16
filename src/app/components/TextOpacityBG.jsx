import React from 'react'
import "./components.scss";

function TextOpacityBG({ children, left }) {
  return (
    <span className={left ? 'text-opac-mixin-left' : 'text-opac-mixin-right'}>{children}</span>
  )
}

export default TextOpacityBG
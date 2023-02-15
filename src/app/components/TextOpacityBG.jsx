import React from 'react'
import "./components.scss";

function TextOpacityBG({ children, left }) {
  return (
    <div className={left ? 'text-opac-mixin-left' : 'text-opac-mixin-right'}>{children}</div>
  )
}

export default TextOpacityBG
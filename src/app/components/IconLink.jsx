import React from 'react'
import "./components.scss";

function IconLink({ href, children }) {
    return (
        <a href={href}
            className="icon-link"
        >{children}</a>
    )
}

export default IconLink
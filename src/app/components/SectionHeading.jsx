import React from 'react'
import "./components.scss";

function SectionHeading({ title }) {
    return (
        <h2 className='section-heading'>
            {title}
        </h2>
    )
}

export default SectionHeading
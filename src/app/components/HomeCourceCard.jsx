import React from 'react'
import "./components.scss";

function HomeCourceCard({ title, href, content }) {
    return (
        <div className='home-cource-card'>
            <h3 >{title}</h3>
            <div>{" "}</div>
            <br />
            <p>{content} <a href={href}>Read More</a></p>
        </div>
    )
}

export default HomeCourceCard
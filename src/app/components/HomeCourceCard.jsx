import React from 'react'
import "./components.scss";
import { Link } from 'react-router-dom';

function HomeCourceCard({ title, content }) {
    return (
        <div className='home-cource-card'>
            <h3 >{title}</h3>
            <div>{" "}</div>
            <br />
            <p>{content} 
            <Link to={"/cources"}><a>Read More</a></Link></p>
        </div>
    )
}

export default HomeCourceCard
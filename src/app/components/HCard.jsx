import React from 'react'
import "./components.scss"

function HCard({ title }) {
    return (
        <div className='flex-col-center h-card'>
            {title}
        </div>
    )
}

export default HCard
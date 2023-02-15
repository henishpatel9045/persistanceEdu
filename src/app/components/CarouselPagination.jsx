import React from 'react'
import "./components.scss";

function CarouselPagination({total, current}) {
  return (
    <span className='carousel-pagination'>
        {current}/{total}
    </span>
  )
}

export default CarouselPagination
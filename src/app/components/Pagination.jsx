import React, { useState } from 'react'
import CarouselBtn from './CarouselBtn';
import CarouselPagination from './CarouselPagination';

function Pagination({currPage, totalPages, next, prev}) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <CarouselBtn onClick={prev} left disabled={currPage == 1} />
            <CarouselPagination current={currPage} total={totalPages} />
            <CarouselBtn onClick={next} disabled={currPage==totalPages} />
        </div>
    )
}

export default Pagination
import React, { useEffect, useState } from 'react'
import TSection from '../components/testimonials/TSection'
import { TestimonialData } from '../data/data'

function Testimonials() {
    const [tData, setTData] = useState([])
    useEffect(() => {
        setTData(TestimonialData);
    })

    return (
        <>
            <TSection data={tData} />
        </>
    )
}

export default Testimonials
import React, { useEffect, useState } from 'react'
import { api } from '../api/call'
import TSection from '../components/testimonials/TSection'
import { TestimonialData } from '../data/data'

function Testimonials() {
    const [tData, setTData] = useState([])
    useEffect(() => {
        api.get("testimonial").then(res => {
            if (res.ok){
                setTData(res.data.testimonial)
            }else{
                setTData(TestimonialData);
            }
        }).catch(err => {
            setTData(TestimonialData);
        })
    }, [])

    return (
        <>
            <TSection data={tData} />
        </>
    )
}

export default Testimonials
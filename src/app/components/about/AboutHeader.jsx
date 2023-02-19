import React from 'react'

import TextOpacityBG from '../TextOpacityBG';
import "../components.scss";
import HeaderBase from '../HeaderBase';

const Header = () => {
    return (
        <div className='header-text-container' style={{

        }}>
            <div className='header-main'>
                <h1 style={{ fontWeight: 600, lineHeight: "3.5rem", fontSize: '2rem', marginBottom: "1rem" }}>
                    Our Faculty members are really great, and they are very <TextOpacityBG left={true}>knowledgeable.</TextOpacityBG>
                </h1>
                <div>
                    <p>
                        They are from great universities. The teaching quality depends on every professor, but the teaching quality of most of them is good.
                    </p>
                </div>
            </div>
        </div>
    )
}

function AboutHeader() {
    return (
        <HeaderBase Header={Header} stars={false} about={true} />       
    )
}

export default AboutHeader
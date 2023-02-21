import React from 'react'

import TextOpacityBG from '../TextOpacityBG';
import "../components.scss";
import HeaderBase from '../HeaderBase';

const Header = () => {
    return (
        <div className='header-text-container'>
            <div className='header-main'>
                <h1 style={{ fontWeight: 600, color: "#1681AB", fontSize: '2rem', marginBottom: "1rem" }}>
                    Our Faculty members are really great, and they are very knowledgeable.
                </h1>
                <div>
                    <p style={{
                        color: '#3D3D3D'
                    }}>
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
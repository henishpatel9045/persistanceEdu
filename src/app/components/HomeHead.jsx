import React, { useState } from 'react'
import TextOpacityBG from './TextOpacityBG'
import "./components.scss"
import SUB from "../assets/header-sub.png";
import ButtonBase from './ButtonBase'
import ROTATE from "../assets/heading-vec.svg"
import { SocialLinks } from '../data/data'
import HeaderBase from './HeaderBase'
import LinkModel from './LinkModel';

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='header-text-container' style={{

    }}>
      <div className='header-main'>
        <h1 style={{ fontWeight: 600, lineHeight: "3.5rem", }}>
          We make it <TextOpacityBG left={true}>easier to</TextOpacityBG><br />
          <TextOpacityBG>obtain a quality</TextOpacityBG><br />
          education with us.
          {/* Getting <TextOpacityBG left={true}>Quality</TextOpacityBG> <br />
          <TextOpacityBG>Education</TextOpacityBG> is now <br />
          more easy with us. <br /> */}
          <img src={ROTATE} className="heading-pic" />
        </h1>
        <div>
          <img src={SUB} alt="" />
          <p>Our coaching center sets high standards for education by emphasizing the importance of quality teaching, commitment to student progress and  personalised attention to prepare them for success in their academic pursuits. - mention this in the home page second line.</p>
        </div>
      </div>
      <LinkModel show={show} setShow={setShow} phone={SocialLinks.tel} />
      <button className='primary-btn' onClick={() => setShow(!show)}>Join Us</button>
    </div>
  )
}

function HomeHead() {
  return (
    <HeaderBase Header={Header} bg={true} />
  )
}

export default HomeHead
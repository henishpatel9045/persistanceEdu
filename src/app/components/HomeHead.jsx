import React, { useState } from 'react'
import TextOpacityBG from './TextOpacityBG'
import "./components.scss"
import SUB from "../assets/header-sub.png";
import ButtonBase from './ButtonBase'
import ROTATE from "../assets/heading-vec.svg"
import { SocialLinks } from '../data/data'
import HeaderBase from './HeaderBase'
import LinkModel from './LinkModel';
import { useMedia } from 'use-media';

const Header = () => {
  const [show, setShow] = useState(false);
  const isXS = useMedia({ maxWidth: "768px" })

  return (
    <div className='header-text-container' style={{
      paddingTop: isXS ? "2rem" : 0,
    }}>
      <div className='header-main'>
        <h1 style={{ fontWeight: 600, lineHeight: "3.5rem", }}>
          With us, <TextOpacityBG left={true}>obtaining a</TextOpacityBG><br/>
          <TextOpacityBG left={false}>quality</TextOpacityBG> education<br/>
          is made  easier.
          <img src={ROTATE} className="heading-pic" />
        </h1>
        <div>
          <img src={SUB} alt="" />
          <p>Our coaching center sets high standards for education by emphasizing the importance of quality teaching, commitment to student progress and  personalised attention to prepare them for success in their academic pursuits.</p>
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
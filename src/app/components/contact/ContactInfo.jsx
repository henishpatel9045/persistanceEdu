import React from 'react'
import BGCompo from '../BGCompo'
import LOC from "../../assets/con-loc.svg"
import CALL from "../../assets/con-call.svg"
import MAIL from "../../assets/con-mail.svg"
import { SocialLinks } from '../../data/data'
import "../components.scss"
import LinkModel from '../LinkModel'

const IconCompo = ({ img, Content }) => {
    return <div className='d-flex align-items-center justify-content-start' style={{
        columnGap: "1rem",
    }}>
        <img src={img} alt="icon" style={{
            width: "3rem",
            height: "3rem"
        }} />
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <Content />
        </div>
    </div>
}

function ContactInfo() {
    const iconMap = [
        {
            img: LOC,
            compo: [SocialLinks.address]
        },
        {
            img: CALL,
            compo: [SocialLinks.tel, SocialLinks.tel2]
        },
        {
            img: MAIL,
            compo: [SocialLinks.mail]
        }
    ]

    const [show, setShow] = React.useState(false);
    const [phone, setPhone] = React.useState("");

    return (
        <div className='contact-info d-flex flex-column align-items-start justify-content-center' style={{
            rowGap: "1rem"
        }}>
            <BGCompo show={true} />
            <h3>Contact Information</h3>
            <LinkModel show={show} setShow={setShow} phone={phone} />
            <IconCompo img={LOC} Content={() => {
                return <span><a target="_blank" href={SocialLinks.map}>{SocialLinks.address}</a></span>
            }} />
            <IconCompo img={CALL} Content={() => {
                return <div className='d-flex flex-column align-items-center justify-content-start'>
                    <span><a onClick={() => {
                        setPhone(SocialLinks.tel);
                        setShow(true)
                    }}>{SocialLinks.tel}</a></span>
                    <span><a onClick={() => {
                        setPhone(SocialLinks.tel2);
                        setShow(true)
                    }}>{SocialLinks.tel2}</a></span>
                    {/* <span><a target="_blank" href={`tel:${SocialLinks.tel2}`}>{SocialLinks.tel2}</a></span> */}
                </div>
            }} />
            <IconCompo img={MAIL} Content={() => {
                return <span><a target="_blank" href={`mailto:${SocialLinks.mail}`}>{SocialLinks.mail}</a></span>
            }} />

        </div>
    )
}

export default ContactInfo
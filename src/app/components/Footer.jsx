import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import "./components.scss";
import LOGO from "../assets/Logo.png"
import FB from "../assets/fb.png"
import YT from "../assets/yt.png"

import IconLink from './IconLink';

function Footer() {
    const items = [
        {
            title: 'Home',
            href: "home"
        },
        {
            title: 'About Us',
            href: "about"
        },
        {
            title: 'Our Cources',
            href: "cources"
        },
        {
            title: 'Achievements & Results',
            href: "achievements"
        },
        {
            title: 'Students Testimonials',
            href: "testimonials"
        },
    ]

    return (
        <Container fluid className='footer-main'>
            <Row style={{
                rowGap: "1rem"
            }}>
                <Col lg={2} xs={12} >
                    <img src={LOGO} />
                </Col>
                <Col lg={8} xs={12} style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexWrap: "wrap",
                }} >
                    <Row>
                        {items.map((item, ind) => {
                            return <Col lg="auto" xs={6}>
                                <a className='footer-nav-link' key={ind} href={item.href}>{item.title}</a>
                            </Col>
                        })}
                    </Row>
                </Col>
                <Col lg={2} xs={12}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <IconLink href={"http://www.google.com"}>
                            <img src={FB} alt="Facebook" />
                        </IconLink>
                        <IconLink>
                            <img src={YT} alt="Facebook" />
                        </IconLink>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
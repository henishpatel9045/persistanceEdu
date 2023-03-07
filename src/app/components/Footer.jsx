import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import "./components.scss";
import LOGO from "../assets/Logo.svg"
import FB from "../assets/fb.svg"
import YT from "../assets/yt.svg"
import MAP from "../assets/location.svg"
import { SocialLinks, SitePages } from '../data/data';
import IconLink from './IconLink';
import { Link } from 'react-router-dom';
import { useMedia } from 'use-media';

const MapBtn = ({ href }) => {
    return <a href={href} target="_blank" className="footer-map-link">
        <img src={MAP} alt="Map" />
        <span>Location On Map</span>
    </a>
}


function Footer() {
    const isSM = useMedia({ maxWidth: "768px" })

    return (
        // <Container fluid >
        <Row className='footer-main' >
            <Col xs={12}>
                <Row style={{
                    rowGap: "1rem",
                    alignItems: "center",
                }}>
                    <Col lg={2} xs={12} className={isSM ? "d-flex align-items-center justify-content-center" : ""} >
                        <Link to="home"><img src={LOGO} alt="logo" className='main-logo img-fluid' /></Link>
                    </Col>
                    <Col lg={8} xs={12} style={{
                        // display: "flex",
                        // justifyContent: isSM ? "center" : "space-around",
                        // alignItems: "center",
                        // flexWrap: "wrap",
                    }}>
                        <Row className={isSM ? "d-flex justify-content-center" : ""}>
                            <Col xs={12} style={{
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                flexWrap: "wrap",
                                columnGap: "0.5rem",
                                rowGap: "0.5rem",
                            }} >
                                {SitePages.map((item, ind) => {
                                    return <Link key={ind} to={item.href} ><a className='footer-nav-link' href={item.href}>{item.title}</a></Link>
                                })}
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2} xs={12} className={isSM ? "d-flex align-items-center justify-content-center" : ""}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <IconLink href={SocialLinks.fb}>
                                <img src={FB} alt="Facebook" />
                            </IconLink>
                            <IconLink href={SocialLinks.yt}>
                                <img src={YT} />
                            </IconLink>
                        </div>
                    </Col>
                </Row>
                <hr style={{
                    border: "1px solid #7FBFD9",
                    marginTop: "1rem"
                }} />
                <Row>
                    <Col xs={12}>
                        <div className='footer-copyright'>
                            <MapBtn href={SocialLinks.map} />
                            <span><b>&copy; Persistance Education.</b> All Rights Reserved.</span>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        // </Container>
    )
}

export default Footer
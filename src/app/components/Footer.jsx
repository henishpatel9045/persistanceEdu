import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import "./components.scss";
import LOGO from "../assets/Logo.svg"
import FB from "../assets/fb.svg"
import YT from "../assets/yt.svg"
import MAP from "../assets/location.svg"
import { SocialLinks, SitePages } from '../data/data';
import IconLink from './IconLink';

const MapBtn = ({ href }) => {
    return <a href={href} className="footer-map-link">
        <img src={MAP} alt="Map" />
        <span>Location On Map</span>
    </a>
}


function Footer() {
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
                        {SitePages.map((item, ind) => {
                            return <Col lg="auto" xs={6}  key={ind} >
                                <a className='footer-nav-link' href={item.href}>{item.title}</a>
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
                        <IconLink href={SocialLinks.fb}>
                            <img src={FB} alt="Facebook" />
                        </IconLink>
                        <IconLink href={SocialLinks.yt}>
                            <img src={YT}  />
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
        </Container>
    )
}

export default Footer
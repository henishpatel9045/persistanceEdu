import React from 'react'

import { Row, Col } from 'react-bootstrap'
import SectionHeading from '../SectionHeading'
import "../components.scss";
import OWNER from "../../assets/owner.png"

function AboutUsSection() {
    return (
        <Row className='pt-5'>
            <Col xs={12}>
                <SectionHeading title={"About Us"} />
            </Col>
            <Col xs={12}>
                <div className='about-us-content-heading'>
                    <p>
                        IIT and NEET are not difficult exams, it just requires a different approach and with strong guidance you can definately make it.
                    </p>
                    <p>
                        - From The Director
                    </p>
                </div>
            </Col>
            <Col xs={12}>
                <Row className='about-us-content d-flex align-item-start justify-content-center'>
                    <Col xs={12} md={4}>
                        <div className='image'>
                            <img src={OWNER} alt="Ashish Anand" />
                            <div>
                                <h4>Ashish Anand</h4>
                                <p>IIT Bombay</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={7}>
                        <div className='content'>
                            <h4>
                                “Success is not final; failure is not fatal: It is the courage to continue that counts.”
                            </h4>
                            <br />
                            <p>
                                Having been an IIT Bombay alumnus myself, I teach my students the tools that prepare them mentally for the exam. The way you perform under those high pressure environment is extremely important. We can give proper care and attention to students. Since so many years,we produced the best results of IIT-JEE from Ranchi City. Here we have a thirst for success of our students and there are no boundaries of hard work at our institution. From past 4 Academic sessions, we have introduced Medical entrance coaching also.
                            </p>
                            <p>
                                Persistence was started in 2008 and since then I have made the dreams of hundreds of students to study in the most prestigious institute of the country come alive. We at persistence family are a closely knitted network where we help each other grow.A topper of Netarhat school, then went to study engineering from IIT-Bombay and quit my job at Capgemini to follow my passion to teach.
                            </p>
                            <p>
                                Our success Ratio in JEE(mains) and JEE(advanced) is way higher than national average.Let us understand how: Around ten lakh students compete for JEE(MAIN) where only 50000 students get admisssions in IIT and NITs. At national level there happens 1 admission out of 20 but at PERSISTENCE we achived the remarkable feat of 1 admission out of 2 due to the combined efforts of our students.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AboutUsSection
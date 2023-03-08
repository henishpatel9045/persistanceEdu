import React from 'react'

import { Row, Col } from 'react-bootstrap'
import SectionHeading from '../SectionHeading'
import "../components.scss";
import OWNER from "../../assets/owner.png"
import { useMedia } from 'use-media';

function AboutUsSection() {
    const isXL = useMedia({ minWidth: "1800px" })

    return (
        <Row className='pt-5'>
            <Col xs={12} className="pt-5">
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
                <Row className='about-us-content d-flex align-item-start justify-content-center'
                    style={{
                        position: "relative"
                    }}>
                    <Col xs={12} md={4} xxl={3} style={{
                        width: isXL && "16.67%",
                    }}>
                        <div className='image h-100'>
                            <img src={OWNER} alt="Ashish Anand" />
                            <div>
                                <h4>Ashish Anand</h4>
                                <p>IIT Bombay</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={7} style={{
                        // height: "100%",
                    }}>
                        <div className='content h-100'>
                            <h4>
                                “Success is not final; failure is not fatal: It is the courage to continue that counts.”
                            </h4>
                            <br />
                            <p>
                                As an alumnus of IIT Bombay, I am passionate about teaching my students the tools they need to succeed in their exams, especially in high-pressure environments. At our institution, we prioritize giving our students the care and attention they need to excel. We have a proven track record of producing the best results in IIT-JEE from Ranchi City, and we are committed to the success of our students. In addition to our JEE coaching, we have also introduced medical entrance coaching over the past four academic sessions.
                            </p>
                            <p>
                                Persistence was founded in 2008, and since then, we have helped hundreds of students realize their dreams of studying in the most prestigious institutes in the country. Our community is closely-knit, and we work together to help each other grow. As a former topper of Netarhat School and an IIT Bombay engineering graduate, I left my job at Capgemini to follow my passion for teaching.
                            </p>
                            <p>
                                Our success ratio in JEE (Mains) and JEE (Advanced) far exceeds the national average. For example, around ten lakh students compete for JEE (Mains), where only 50,000 students are admitted to IIT and NITs. At the national level, there is only one admission out of twenty, but at Persistence, we have achieved the remarkable feat of one admission out of two, thanks to the combined efforts of our students.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AboutUsSection
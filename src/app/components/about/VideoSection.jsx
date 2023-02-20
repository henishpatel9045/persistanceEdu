import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useMedia } from 'use-media'
import BGCompo from '../BGCompo'

function VideoSection() {
    const isSM = useMedia({ maxWidth: "768px" })
    return (
        <Row style={{ backgroundColor: "#1681AB" }} className='d-flex justify-content-center align-items-center position-relative p-5'>
            <BGCompo />
            <Col xs={12} md={10} className="d-flex flex-column justify-content-center align-items-center">
                <h2 style={{ color: "white", zIndex: 1, fontWeight: 700 }}>WHY PERSISTANCE?</h2>
                <iframe
                    style={{
                        marginTop: "1rem",
                        zIndex: 1,
                        borderRadius: "1rem",
                        width: "100%",
                        height: isSM
                            ? "15rem"
                            : "60vh"
                    }}
                    src="https://www.youtube.com/embed/NBwOIj5Q7GI"
                    title="Persistence Education"
                    allow="accelerometer; encrypted-media; gyroscope;"></iframe>
            </Col>
        </Row>
    )
}

export default VideoSection
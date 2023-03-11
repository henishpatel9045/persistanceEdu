import React from 'react'
import { Modal } from 'react-bootstrap'
import "./components.scss"

function ImageOverlay({show, setShow, src}) {
    return (
        <Modal show={show} size="xl" onHide={() => setShow(false)}>
            <Modal.Body className='img-overlay d-flex align-items-center justify-content-center'>
                <img src={src} alt="carousel" />
                {/* <button onClick={() => setShow(false)}>X</button> */}
            </Modal.Body>
        </Modal>
    )
}

export default ImageOverlay
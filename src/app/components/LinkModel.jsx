import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LinkModel({ show, setShow, phone }) {
    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose}>
            {/* <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header> */}
            <Modal.Body style={{
                color: "black"
            }}>Make call to: {phone}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    <a href={`tel:${phone}`}>Make Call</a>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LinkModel
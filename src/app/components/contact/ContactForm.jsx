import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import ButtonBase from '../ButtonBase'
import "../components.scss"

function ContactForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = () => {
        console.log();
    }

    return (
        <div className='contact-form-container'>
            <h3>Contact Us</h3>
            <div className='form-fields'>
                <Form>
                    <div className='d-flex align-items-center justify-content-between' style={{ columnGap: "1rem" }}>
                        <Form.Group className="mb-3" controlId="firstName" style={{ width: "100%" }}>
                            <Form.Label style={{ color: "#888", fontWeight: 400, fontSize: "0.8rem" }}>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='lastName' style={{ width: "100%" }}>
                            <Form.Label style={{ color: "#888", fontWeight: 400, fontSize: "0.8rem" }}>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="email" style={{ width: "100%" }}>
                        <Form.Label style={{ color: "#888", fontWeight: 400, fontSize: "0.8rem" }}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="abc@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message" style={{ width: "100%" }}>
                        <Form.Label style={{ color: "#888", fontWeight: 400, fontSize: "0.8rem" }}>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Hello!..." />
                    </Form.Group>

                    <button className='primary-btn'>
                        Send Yout Message
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default ContactForm

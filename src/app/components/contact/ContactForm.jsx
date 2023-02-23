import React, { useState } from 'react'
import { Alert, Form } from 'react-bootstrap'
import "../components.scss"

function ContactForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = () => {
        console.log(firstName, lastName, email, message);
        if (!message || message?.length == 0) {
            alert("Fill message")
        }
        else {
            alert("Message sent successfully!")
        }
    }

    console.log(firstName, lastName, email, message);

    return (
        <div className='contact-form-container'>
            <h3>Contact Us</h3>
            <div className='form-fields'>
                <Form>
                    <div className='d-flex align-items-center justify-content-between' style={{ columnGap: "1rem" }}>
                        <Form.Group className="mb-3" controlId="firstName" style={{ width: "100%" }}>
                            <Form.Label style={{ color: "#888", fontWeight: 400, fontSize: "0.8rem" }}>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='lastName' style={{ width: "100%" }}>
                            <Form.Label style={{ color: "#888", fontWeight: 400, fontSize: "0.8rem" }}>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="email" style={{ width: "100%" }}>
                        <Form.Label style={{ color: "#888", fontWeight: 400, fontSize: "0.8rem" }}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="abc@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message" style={{ width: "100%" }}>
                        <Form.Label style={{ color: "#888", fontWeight: 400, fontSize: "0.8rem" }}>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Hello!..." onChange={(e) => setMessage(e.target.value)} />
                    </Form.Group>
                    

                    <button className='primary-btn' onClick={handleSubmit}>
                        Send Yout Message
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default ContactForm

import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import "../components.scss"
import axios from 'axios'
import { FORMSPREEURL } from '../../data/data'

function ContactForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = () => {
        if (!message || message?.length == 0) {
            try {
                const formData = new FormData();
                formData.append("name", `${firstName} ${lastName}`);
                formData.append("fromemail", email);
                formData.append("message", message);
                axios.post(FORMSPREEURL, formData);
            } catch (error) {
                alert("Sorry, try again!")
            }
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
                            <Form.Control type="text" onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='lastName' style={{ width: "100%" }}>
                            <Form.Label style={{ color: "#888", fontWeight: 400, fontSize: "0.8rem" }}>Last Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => setLastName(e.target.value)} />
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="email" style={{ width: "100%" }}>
                        <Form.Label style={{ color: "#888", fontWeight: 400, fontSize: "0.8rem" }}>Email address</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message" style={{ width: "100%" }}>
                        <Form.Label style={{ color: "#888", fontWeight: 400, fontSize: "0.8rem" }}>Message</Form.Label>
                        <Form.Control as="textarea" rows={3}  onChange={(e) => setMessage(e.target.value)} />
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

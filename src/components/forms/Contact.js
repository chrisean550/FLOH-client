import React from 'react'
import Form from 'react-bootstrap/Form'
export default function Contact() {
    return (
        <Form className="cust-form">
            <Form.Control size="sm" className="cust-form-item" type="text" placeholder="Full Name*"/>
            <Form.Control size="sm" className="cust-form-item" type="email" placeholder="Email*"/>
            <Form.Control size="sm" className="cust-form-item" type="text" placeholder="Phone*"/>
            <Form.Check className="cust-form-select" inline label="Can we call you?"/>
            <Form.Control size="sm" className="cust-form-message" as="textarea" rows={7} placeholder="Message"/>
        </Form>
    )
}

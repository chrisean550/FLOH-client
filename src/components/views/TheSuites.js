import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img from '../../imgs/demo_img03.jpg'
import ImageGallery from '../objects/ImageGallery'
export default function TheSuites() {
    return (
        <Container fluid className="p-md-0 p-sm-1">
            <div className="pl-md-4 pt-md-5 pb-5">
                <Row className="align-items-center justify-content-between">
                    <Col sm={12} md={6}>
                        <h2>Luxurious Suites To Fit Your Needs</h2>
                        <div className="divider" />
                        <ul>
                            <li>Free High Speed Internet</li>
                            <li>Password Locked Doors</li>
                            <li>Shampoo Bowl</li>
                            <li>Hooded Dryer</li>
                            <li>Station With Large Mirror</li>
                        </ul>
                    </Col>
                    <img src={img} className="the-img" alt="" />
                </Row>
            </div>
            <ImageGallery/>
        </Container>
    )
}

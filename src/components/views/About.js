import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img1 from '../../imgs/demo_img01.jpg'
import img2 from '../../imgs/demo_img02.jpg'

export default function About() {
    return (
        <Container fluid>
            <Row className="align-items-center flex-wrap-reverse pt-md-2 pb-5">
                <Col xs={12} lg={5} className="about-content">
                    <h2>What Is FLOH?</h2>
                    <div className="divider"/>
                    <p>
                        FLOH Salon Suites was created
                        to give stylist and their guest the
                        best salon going experience
                        possible. Proving comfortable
                        luxurious and private spaces for
                        stylist to demonstrate their
                        expertise.
                    </p>
                </Col>
                <Col xs={12} lg={7} className="p-0">
                    <img src={img1} className="about-img" alt=""/>
                </Col>
            </Row>
            <Row className="align-items-center flex-wrap pt-md-5 pb-5">
                <Col xs={12} lg={7} className="p-0">
                    <img src={img2} className="about-img" alt=""/>
                </Col>
                <Col xs={12} lg={5} className="about-content">
                    <h2>Our Mission</h2>
                    <div className="divider"/>
                    <p>
                        To empower skilled cosmetologist
                        entrepreneurs to start their own
                        business while taking care of the
                        usual headaches and overhead
                        that comes with doing so.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

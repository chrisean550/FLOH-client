import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img from '../../imgs/demo_img03.jpg'
export default function WhySuites() {
    return (
        <Container fluid className="p-0">
            <Col>
                <div className="p-md-3 mt-3 mb-5">
                    <h2>Why Should I Own A Suite?</h2>
                    <div className="divider" />
                    <p>
                        There is nothing better than having the freedom to work for yourself. However,
                        starting a business can be intimidating because most of us are not sure where to
                        start let alone how to afford it. FLOH Salon Suites provides opportunity for
                        aspiring entrepreneurs to start their own business with little risk and the ability
                        to focus on their craft. This means Suite owners will have full control over their
                        own schedule, prices, and space.
                    </p>
                </div>
                <div className="pl-md-3 pb-3">
                    <h2>Suite Benefits</h2>
                    <div className="divider" />
                    <Row className="align-items-center">
                        <Col sm={12} md={5}>
                            <ul>
                                <li>You Are Your Own Boss!</li>
                                <li>24/7 Suite Access</li>
                                <li>No Commission Splits</li>
                                <li>Private And Furnished Space</li>
                                <li>Business Guidence</li>
                                <li>24/7 Security</li>
                                <li>Utilities Included In Rent</li>
                                <li>And So Much More!</li>
                            </ul>
                        </Col>
                        <Col sm={12} md={7} className="p-0">
                            <img src={img} className="why-img" alt=""/>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Container>
    )
}

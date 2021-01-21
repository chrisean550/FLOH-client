import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
export default function NavMenu(props) {
    return (
        <Nav className="cust-nav-menu flex-wrap" style={props.custStyle}>
            <Link to="/about" className="cust-nav-item">About</Link>/
            <Link to="/reserve" className="cust-nav-item">Reserve</Link>/
            <Link to="/find-stylist" className="cust-nav-item">FindStylist</Link>/
            <Link to="/the-suites" className="cust-nav-item">TheSuites</Link>/
            <Link to="/why-suites" className="cust-nav-item">WhySuites</Link>
        </Nav>
    )
}

import React from 'react'
import Nav from 'react-bootstrap/Nav'
import $ from 'jquery'
import {Link} from 'react-router-dom'
export default function NavOverlay() {
    const hideMenu = ()=>{
        $(".nav-overlay").hide()
    }
    return (
        <div className="nav-overlay" onClick={hideMenu}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" onClick={hideMenu}/> 
            <Nav className="h-100 flex-column justify-content-center align-items-center">
                <Link to="/about" className="cust-nav-item">About</Link>
                <Link to="/reserve" className="cust-nav-item">Reserve</Link>
                <Link to="/find-stylist" className="cust-nav-item">FindStylist</Link>
                <Link to="/the-suites" className="cust-nav-item">TheSuites</Link>
                <Link to="/why-suites" className="cust-nav-item">WhySuites</Link>
            </Nav>
        </div>
    )
}

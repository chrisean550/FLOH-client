import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar(props) {
    return (
        <Navbar className="cust-nav-bar sticky-top justify-content-between">
            <Link to="/" className="cust-nav-brand" style={{color:"#FFFFFF"}}>FLOH</Link>
            {props.children}
        </Navbar>
    )
}

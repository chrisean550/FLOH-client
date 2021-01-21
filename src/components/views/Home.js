import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import img from '../../imgs/home_img.png'

export default function Home(props) {

    useEffect(() => {
        props.isHomeScreen(true)

        return function cleanup() {
            props.isHomeScreen(false)
        }
    })

    return (
        <>
            <div className="home-underlay" />
            <div className="home-content">
                <div className="welcome-section">
                    <div className="header">
                        <h1>Welcome To</h1>
                        <h1>FLOH Salon Suites</h1>
                    </div>
                    <div className="button-group">
                        <Button className="cust-button offset-left">Reserve Space</Button>
                        <Button className="cust-button offset-right">Find Professional</Button>
                    </div>

                </div>
                <img className="home-img" src={img} alt="" />
            </div>
        </>
    )
}

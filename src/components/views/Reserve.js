import React from 'react'
import Contact from '../forms/Contact'
import img1 from '../../imgs/demo_img04.jpg'
import img2 from '../../imgs/demo_img05.jpg'
export default function Reserve() {
    return (
        <div className="d-flex flex-wrap justify-content-around align-items-center m-md-3">
            <div className=" m-1 reserve-content d-flex flex-column">
                <h1>Ready To Kick <br /> Start Your Business?</h1>
                <p className="mt-2">
                    Fill out this form to be contacted
                    about touring and finding your
                    perfect suite!
                </p>

                <div className="reserve-imgs-wrapper d-flex flex-row">
                    <img src={img1} className="reserve-img" alt="" />
                    <img src={img2} className="reserve-img" alt="" />
                </div>
            </div>
            <Contact />
        </div>
    )
}

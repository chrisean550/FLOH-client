import React, { useEffect, useState } from 'react'
import gallery from '../../gallery.json'
import $ from 'jquery'
import Button from 'react-bootstrap/Button'
export default function ImageGallery() {
    const [image, setImage] = useState(0)

    useEffect(() => {
        $("#gallery-img").css("opacity", "1")
    })

    const goLeft = () => {
        $("#gallery-img").animate({ left: "-250px", opacity: "0" }, () => {
            $("#gallery-img").remove()
            if (gallery[image + 1]) {
                setImage(image + 1)
            }
            else {
                setImage(0)
            }
            $("#gallery").append(`<img id="gallery-img" src=${gallery[image].path} class="gallery-img from-right" alt=""/>`)
            $("#gallery-img").animate({ left: "0px", opacity: "1" })
        })
    }
    const goRight = () => {
        $("#gallery-img").animate({ left: "250px", opacity: "0" }, () => {
            $("#gallery-img").remove()
            if (gallery[image - 1]) {
                setImage(image - 1)
            }
            else {
                setImage(gallery.length - 1)
            }
            $("#gallery").append(`<img id="gallery-img" src=${gallery[image].path} class="gallery-img from-left" alt=""/>`)
            $("#gallery-img").animate({ left: "0px", opacity: "1" })
        })
    }



    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <Button className="scroll-left btn-light" onClick={goLeft}>
                    <i className="fa fa-chevron-left" aria-hidden="true"/>
                </Button>
                <div id="gallery" className="gallery">
                    <img id="gallery-img" src={gallery[0].path} className="gallery-img" alt="" />
                </div>
                <Button className="scroll-right btn-light" onClick={goRight}>
                    <i className="fa fa-chevron-right" aria-hidden="true"/>
                </Button>
            </div>


        </>
    )
}

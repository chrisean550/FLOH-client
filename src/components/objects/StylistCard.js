import React from 'react'
import Button from 'react-bootstrap/Button'

export default function StylistCard(props) {
    const {data} = props
    return (
        <div className="m-3 d-flex flex-wrap professional-card align-items-center justify-content-center">
            <img src={data.headshot} className="headshot" alt="" />
            <div className="d-flex flex-column ml-3 mr-3">
                <p className="salon-name">{data.salonName}</p>
                <p className="owner-name">{data.ownerName}</p>
                <p className="salon-address">
                    {data.addressFirstLine}
                    <br/>
                    {data.addressSecondLine}
                    <br/>
                    Suite {data.suite}
                    </p>
                <p className="salon-phone">{data.phone}</p>
                <Button className="align-self-center book-button">Book</Button>
            </div>

        </div>
    )
}

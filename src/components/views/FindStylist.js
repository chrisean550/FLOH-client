import React from 'react'
import StylistCard from '../objects/StylistCard'
import stylist from '../../stylist.json'
export default function FindStylist() {
    return (
        <>
            <h1 className="reserve-header">Find The Perfect <br /> Professional</h1>

            <div className="d-flex flex-wrap justify-content-center">
                {stylist.map((data) => (
                    <StylistCard key={data.id} data={data} />
                ))}
            </div>
        </>
    )
}

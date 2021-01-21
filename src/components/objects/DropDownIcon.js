import React from 'react'
import $ from 'jquery'
export default function DropDownIcon() {
    const showMenu = ()=>{
        $(".nav-overlay").show()
    }

    return (
        <div>
            <i className="fa fa-angle-down fa-2x" aria-hidden="true" onClick={showMenu}/>    
        </div>
    )
}

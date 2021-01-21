import React from 'react'
import DropDownIcon from './DropDownIcon'
import NavBar from './NavBar'
import NavMenu from './NavMenu'

export default function NavManager(props) {
    let {homeScreen} = props
    const smallScreen = 992
    let show = <NavBar><NavMenu/></NavBar>
    let screenSize = window.innerWidth

    if(homeScreen){
        if(screenSize <= smallScreen){
            show = <NavBar><DropDownIcon/></NavBar>
        }
        else{
            show = <NavMenu custStyle={{"position":"absolute", "right":"0"}}/>
        }
    }
    else{
        if(screenSize <= smallScreen){
            show = <NavBar><DropDownIcon/></NavBar>
        }
    }
    
    return (
        show
    )
}

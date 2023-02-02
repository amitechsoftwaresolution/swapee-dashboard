import React from 'react'

import SideBarLink from './SideBarLink'

import {Avatar} from '@mui/material'
import InventoryIcon from '@mui/icons-material/Inventory'
import CategoryIcon from '@mui/icons-material/Category' 
import AutoGraphIcon from '@mui/icons-material/AutoGraph' 
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd' 
import PeopleIcon from '@mui/icons-material/People' 

import './Sidebar.css'

const Sidebar = () => {
    const iconStyle = {width: "20px", height: "20px", color: "#515A5A"}

    const renderInfoContainer = () => {
        return (
            <div className = 'side-bar-info-container-root'>
                <div className = 'side-bar-info-container'>
                    <div className = 'side-bar-info-container-left'>
                        <Avatar 
                            alt = "user-profile-img" 
                            src = "https://berrydashboard.io/static/media/user-round.13b5a31bebd2cc6016d6db2cac8e92d1.svg" 
                            sx = {{width: "35px", height: "35px"}}
                        />
                    </div>
                    <div className = 'side-bar-info-container-right'>
                        <h6 className = 'side-bar-info-name'>Steve Rogers</h6>
                        <p className = 'side-bar-info-role'>admin</p>
                    </div>
                </div>
            </div>
        )
    }

    const renderLinkItemsContainer = () => {
        return (
            <div className = 'side-bar-links-container-root'>
                <span className = 'side-bar-links-container-head'>General</span>
                <SideBarLink icon = {<InventoryIcon sx = {iconStyle}/>} link = "Product" selected = {true}/>
                <SideBarLink icon = {<AutoGraphIcon sx = {iconStyle}/>} link = "Analytics" selected = {false}/>
                <SideBarLink icon = {<CategoryIcon sx = {iconStyle}/>} link = "E-Commerce" selected = {false}/>
                <span className = 'side-bar-links-container-head'>Management</span>
                <SideBarLink icon = {<AssignmentIndIcon sx = {iconStyle}/>} link = "Profile" selected = {false}/>
                <SideBarLink icon = {<PeopleIcon sx = {iconStyle}/>} link = "Customer" selected = {false}/>
            </div>
        )
    }

    return (
        <div className = 'side-bar-compo-root'>
            { renderInfoContainer() }
            { renderLinkItemsContainer() }
        </div>
    )
}

export default Sidebar
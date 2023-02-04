import React from 'react'

import SideBarLink from './SideBarLink'

import {Avatar} from '@mui/material'
import InventoryIcon from '@mui/icons-material/Inventory'
import CategoryIcon from '@mui/icons-material/Category' 
import AutoGraphIcon from '@mui/icons-material/AutoGraph' 
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd' 
import PeopleIcon from '@mui/icons-material/People' 

import './Sidebar.css'

const SideBarCommon = ({sideBarLinks, selectedLinkIndex, handleSideBarLinkOnClick}) => {
    const iconStyle = {width: "20px", height: "20px", color: "#515A5A"}

    const ICONS = {
        "Product" : <InventoryIcon sx = {iconStyle}/>,
        "Analytics": <AutoGraphIcon sx = {iconStyle}/>,
        "E-Commerce": <CategoryIcon sx = {iconStyle}/>,
        "Profile": <AssignmentIndIcon sx = {iconStyle}/>,
        "Customer": <PeopleIcon sx = {iconStyle}/>
    }

    const renderSideBarLink = (i, idx) => (
        <SideBarLink 
            key = {idx}
            icon = {ICONS[i.label]} 
            link = {i.label} 
            selected = {i.index === selectedLinkIndex}
            index = {i.index}
            handleSideBarLinkOnClick = {handleSideBarLinkOnClick}
        />
    )

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
                {
                    sideBarLinks && sideBarLinks["General"] && sideBarLinks["General"].map((i, idx) => {
                        return renderSideBarLink(i, idx)
                    })
                }
                <span className = 'side-bar-links-container-head'>Management</span>
                {
                    sideBarLinks && sideBarLinks["Management"] && sideBarLinks["Management"].map((i, idx) => {
                        return renderSideBarLink(i, idx)
                    })
                }
            </div>
        )
    }

    return (
        <div className = 'side-bar-common-root'>
            { renderInfoContainer() }
            { renderLinkItemsContainer() }
        </div>
    )
}

export default SideBarCommon
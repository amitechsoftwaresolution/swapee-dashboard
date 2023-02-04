import React from 'react'

import SideBarCommon from './SideBarCommon'
import LogoComponent from '../LogoComponent/LogoComponent'

import {Box, Drawer, List, Divider, ListItem} from '@mui/material'

import './Sidebar.css'

const MobileSideMenu = ({
    open, 
    sideBarLinks, 
    selectedLinkIndex, 
    selectedSubLinkIndex, 
    handleSideBarLinkOnClick, 
    handleDrawer, 
    handleLogOut,
    handleSubLinkOnClick
}) => {

    const renderLoggedUserFooter = () => (
        <List>
            <Divider sx = {{backgroundColor: "rgba(255, 255, 255, 0.4)", marginTop: "5px", marginBottom: "10px", m: "7px"}}/>
            <ListItem>
                <div className = "logout_btn" onClick = {handleLogOut}>LOG OUT</div>
            </ListItem>
        </List>
    )

    const renderPanelItems = () => (
        <Box sx = {{ 
                width: 260, 
                height: "100%", 
                // background: '#4b4e5f', 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between" 
            }} 
            role = "presentation"
        >
            <SideBarCommon 
                sideBarLinks = {sideBarLinks}
                selectedLinkIndex = {selectedLinkIndex}
                selectedSubLinkIndex = {selectedSubLinkIndex}
                handleSideBarLinkOnClick = {handleSideBarLinkOnClick}
                handleSubLinkOnClick = {handleSubLinkOnClick}
            />
            { renderLoggedUserFooter() }
        </Box>
    )

    return (
        <div>
            <Drawer anchor = "left" open = {open} onClose = {handleDrawer}>
                <div className = 'mobile-menu-logo-container'>
                    <LogoComponent />
                </div>
                { renderPanelItems() }
            </Drawer>
        </div>
    )
}

export default MobileSideMenu
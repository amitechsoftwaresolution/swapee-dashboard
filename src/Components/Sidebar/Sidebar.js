import React from 'react'

import SideBarCommon from './SideBarCommon'

import {Box, List, Divider, ListItem} from '@mui/material'

import './Sidebar.css'

const Sidebar = ({sideBarLinks, selectedLinkIndex, handleSideBarLinkOnClick}) => {
    const renderFooter = () => (
        <List>
            <Divider sx = {{backgroundColor: "rgba(255, 255, 255, 0.4)", marginTop: "5px", marginBottom: "10px", m: "7px"}}/>
            <ListItem>
                <div className = "side-bar-footer-container">
                    <div>
                        <h6>Hi, Admin</h6>
                        <p>Wanna check our Swapee? Please check here.</p>
                    </div>
                    <a 
                        href = "https://swapee-webapp-dev.web.app" 
                        target="_blank" 
                        rel = "noopener noreferrer"
                        className = 'swapee-link-btn'
                    >
                    Swapee
                    </a>
                </div>
            </ListItem>
        </List>
    )

    return (
        <div className = 'side-bar-compo-root'>
            <Box sx = {{
                height: "100%", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between" 
            }} 
            role = "presentation"
            >
                <SideBarCommon 
                    sideBarLinks = {sideBarLinks} 
                    selectedLinkIndex = {selectedLinkIndex} 
                    handleSideBarLinkOnClick = {handleSideBarLinkOnClick}
                />
                { renderFooter() }
            </Box>
        </div>
    )
}

export default Sidebar
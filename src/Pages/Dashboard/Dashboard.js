import React, { Component } from 'react'

import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import MobileSideMenu from '../../Components/Sidebar/MobileSideMenu'

import {Grid} from '@mui/material'

import './Dashboard.css'

class Dashboard extends Component {
    state = {
        openMobileMenu: false,
        selectedLinkIndex: 0
    }

    sideBarLinks = { 
        "General": [
            {index: 0, label: "Product"},
            {index: 1, label: "Analytics"},
            {index: 2, label: "E-Commerce"}
        ],
        "Management": [
            {index: 3, label: "Profile"},
            {index: 4, label: "Customer"}
        ]
    }

    handleLogOut = () => {

    }

    handleSideBarLinkOnClick = (index) => {
        this.setState({ selectedLinkIndex: index })
    }

    handleMobileMenuOnClick = () => {
        this.setState ({ openMobileMenu: !this.state.openMobileMenu })
    }

    renderSideBar = () => {
        return (
            <Sidebar 
                sideBarLinks = {this.sideBarLinks}
                selectedLinkIndex = {this.state.selectedLinkIndex}
                handleSideBarLinkOnClick = {this.handleSideBarLinkOnClick}
            />
        )
    }

    renderMobileMenu = () => {
        return (
            <MobileSideMenu 
                open = {this.state.openMobileMenu} 
                sideBarLinks = {this.sideBarLinks}
                selectedLinkIndex = {this.state.selectedLinkIndex}
                handleSideBarLinkOnClick = {this.handleSideBarLinkOnClick}
                handleDrawer = {this.handleMobileMenuOnClick}
                handleLogOut = {this.handleLogOut}
            />
        )
    }

    renderTopBar = () => (
        <Topbar handleMobileMenuOnClick = {this.handleMobileMenuOnClick} />
    )

    render() {
        return (
            <div className = 'dashboard-main-page-root'>
                { this.renderTopBar() }
                { this.renderMobileMenu() }
                <Grid container spacing = {1}>
                    <Grid item xs = {0} sm = {3} md = {2} sx = {{display: {xs: 'none', md: 'block'}}}>
                        { this.renderSideBar() }
                    </Grid>
                    <Grid item xs = {12} sm = {9} md = {10}>
                        
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Dashboard
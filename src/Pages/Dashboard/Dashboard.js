import React, { Component } from 'react'

import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import MobileSideMenu from '../../Components/Sidebar/MobileSideMenu'

import Products from '../Product/Products/Products'

import {Grid} from '@mui/material'

import './Dashboard.css'

class Dashboard extends Component {
    state = {
        openMobileMenu: false,
        selectedLinkIndex: 0,
        selectedSubLinkIndex: 0
    }

    sideBarLinks = { 
        "General": [
            {index: 0, label: "Product", subLinks: [{index: 0, label: "Products"}, {index: 1, label: "List"}, {index: 2, label: "Create"}]},
            {index: 1, label: "Analytics", subLinks: []},
            {index: 2, label: "E-Commerce", subLinks: []}
        ],
        "Management": [
            {index: 3, label: "Profile", subLinks: []},
            {index: 4, label: "Customer", subLinks: []}
        ]
    }

    handleLogOut = () => {

    }

    handleSubLinkOnClick = (index) => {
        this.setState({ selectedSubLinkIndex: index })
    }

    handleSideBarLinkOnClick = (index) => {
        this.setState({ selectedLinkIndex: index })
    }

    handleMobileMenuOnClick = () => {
        this.setState ({ openMobileMenu: !this.state.openMobileMenu })
    }

    renderSideBar = () => {
        const {selectedLinkIndex, selectedSubLinkIndex} = this.state
        return (
            <Sidebar 
                sideBarLinks = {this.sideBarLinks}
                selectedLinkIndex = {selectedLinkIndex}
                selectedSubLinkIndex = {selectedSubLinkIndex}
                handleSideBarLinkOnClick = {this.handleSideBarLinkOnClick}
                handleSubLinkOnClick = {this.handleSubLinkOnClick}
            />
        )
    }

    renderMobileMenu = () => {
        const {openMobileMenu, selectedLinkIndex, selectedSubLinkIndex} = this.state
        return (
            <MobileSideMenu 
                open = {openMobileMenu} 
                sideBarLinks = {this.sideBarLinks}
                selectedLinkIndex = {selectedLinkIndex}
                selectedSubLinkIndex = {selectedSubLinkIndex}
                handleSideBarLinkOnClick = {this.handleSideBarLinkOnClick}
                handleDrawer = {this.handleMobileMenuOnClick}
                handleLogOut = {this.handleLogOut}
                handleSubLinkOnClick = {this.handleSubLinkOnClick}
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
                    <Grid item xs = {12} sm = {9} md = {10} sx = {{marginTop: '9vh'}}>
                        <Products />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Dashboard
import React from 'react'

import LogoComponent from '../LogoComponent/LogoComponent'
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent'

import {Grid, Avatar, IconButton} from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"
import SettingsIcon from "@mui/icons-material/Settings"

import './Topbar.css'

const Topbar = ({handleMobileMenuOnClick}) => {
    const renderBarLeftContainer = () => {
        return (
            <Grid item xs = {4} sm = {4} md = {2}>
                <div className = 'top-bar-container'>
                    <LogoComponent textColor = "text.secondary" position = "start" />
                    <IconButton color = "primary" aria-label = "menu" component = "label" sx = {{marginLeft: "15px"}} onClick = {handleMobileMenuOnClick}>
                        <Avatar variant = "rounded" sx = {{width: "30px", height: "30px", backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
                            <MenuIcon />
                        </Avatar>
                    </IconButton>
                </div>
            </Grid>
        )
    }

    const renderBarRightContainer = () => {
        return (
            <Grid item xs = {8} sm = {8} md = {10}>
                <div className = 'top-bar-container'>
                    <SearchBarComponent placeholder = "Search" xs = 'none' />
                    <div/>
                    <div className = 'setting-container'>
                        <div className = 'settings-icon'>
                            <SettingsIcon />
                        </div>
                        <div className = 'profile-icon'>
                            <Avatar 
                                alt = "user-profile-img" 
                                src = "https://berrydashboard.io/static/media/user-round.13b5a31bebd2cc6016d6db2cac8e92d1.svg" 
                                sx = {{width: "35px", height: "35px"}}
                            />
                        </div>
                    </div>
                </div>
            </Grid>
        )
    }

    return (
        <div className = 'top-bar-compo-root nav'>
            <div className = 'top-bar-compo-container'>
                <Grid container spacing = {1}>
                    { renderBarLeftContainer() }
                    { renderBarRightContainer() }
                </Grid>
            </div>
            <style>{`
                .nav{
                    background: rgba(75, 78, 95, 1);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                    background: linear-gradient(110deg, #4b4e5f 60%, #fcfcfc 0%);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                }
            `}</style>
        </div>
    )
}

export default Topbar
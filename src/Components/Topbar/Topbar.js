import React from 'react'

import LogoComponent from '../LogoComponent/LogoComponent'

import {Grid} from '@mui/material'

import './Topbar.css'

const Topbar = () => {
    const renderBarLeftContainer = () => {
        return (
            <Grid item xs = {12} sm = {12} md = {3}>
                <LogoComponent textColor = "text.secondary" position = "start" />
                <div className = ''></div>
            </Grid>
        )
    }

    const renderBarRightContainer = () => {
        return (
            <Grid item xs = {12} sm = {12} md = {9}>

            </Grid>
        )
    }

    return (
        <div className = 'top-bar-compo-root nav'>
            <Grid container spacing = {2}>
                { renderBarLeftContainer() }
                { renderBarRightContainer() }
            </Grid>
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
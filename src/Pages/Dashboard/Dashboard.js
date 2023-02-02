import React, { Component } from 'react'

import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'

import {Grid} from '@mui/material'

import './Dashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <div className = 'dashboard-main-page-root'>
                <Topbar/>
                <Grid container spacing = {1}>
                    <Grid item xs = {0} sm = {3} md = {2} sx = {{display: {xs: 'none', md: 'block'}}}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs = {12} sm = {9} md = {10}>
                        
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Dashboard
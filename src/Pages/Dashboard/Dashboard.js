import React, { Component } from 'react'

import Topbar from '../../Components/Topbar/Topbar'

import './Dashboard.css'

class Dashboard extends Component {
    render() {
        return (
            <div className = 'dashboard-main-page-root'>
                <Topbar/>
            </div>
        )
    }
}

export default Dashboard
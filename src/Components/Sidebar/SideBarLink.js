import React from 'react'

import './Sidebar.css'

const SideBarLink = ({icon, link, selected}) => {
    let className = ['side-bar-link-container', selected && 'side-bar-link-container-selected'].join(' ')
    return (
        <div className = 'side-bar-link-root'>
            <div className = {className}>
                {icon}
                <span className = 'side-bar-link-value'>{link}</span>
            </div>
        </div>
    )
}

export default SideBarLink
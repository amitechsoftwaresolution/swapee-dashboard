import React from 'react'

import {List, Collapse} from '@mui/material'

import './Sidebar.css'

const SideBarLink = ({icon, link, selected, index, selectedSubIndex, subLinks, handleSideBarLinkOnClick, handleSubLinkOnClick}) => {
    let className = ['side-bar-link-container', selected && 'side-bar-link-container-selected'].join(' ')

    const renderSubLink = (i, idx) => (
        <div className = 'side-bar-link-sub-container' key = {idx} onClick = {() => handleSubLinkOnClick(i.index)}>
            <div className = "sub-link-dot">
                <span className = {['sub-link-dot-span', idx === selectedSubIndex && 'sub-link-dot-span-selected'].join(' ')} />
            </div>
            <div className = "sub-link-text">
                <span className = {['sub-link-text-span', idx === selectedSubIndex && 'sub-link-text-span-selected'].join(' ')}>
                    {i.label}
                </span>
            </div>
        </div>
    )

    const renderSubLinks = () => {
        return (
            <Collapse in = {selected} timeout = "auto" unmountOnExit>
                <div className = 'side-bar-link-sub-root'>
                    <List component = "div" disablePadding>
                        { subLinks.map((i, idx) => { return renderSubLink(i, idx) }) }
                    </List>
                </div>
            </Collapse>
        )
    }

    return (
        <div className = 'side-bar-link-root' onClick = {() => handleSideBarLinkOnClick(index)}>
            <div className = {className}>
                {icon}
                <span className = 'side-bar-link-value'>{link}</span>
            </div>
            { subLinks && subLinks.length > 0 && renderSubLinks() }
        </div>
    )
}

export default SideBarLink
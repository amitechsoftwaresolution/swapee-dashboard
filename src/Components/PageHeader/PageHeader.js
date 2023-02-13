import React from "react"

import {Stack, Breadcrumbs} from '@mui/material'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

import './PageHeader.css'

const PageHeader = ({navs}) => {
    let len = navs ? navs.length : 0

    const renderBreadcrumb = (i, idx) => (
        <span className = {idx === len - 1 ? "page-top-bread-crumb-sub-last" : "page-top-bread-crumb-sub"} key = {idx}>
        {i}
        </span>
    )

    const renderSeparator = () => (
        <KeyboardArrowRight sx = {{width: "20px", height: "20px", mr: "5px", ml: "5px", color: "rgb(158, 158, 158)"}}/>
    )

    const renderNavs = () => (
        <Stack spacing = {2}>
            <Breadcrumbs separator = {renderSeparator()} aria-label = "breadcrumb">
                { navs && navs.map((i, idx) => renderBreadcrumb(i, idx)) }
            </Breadcrumbs>
        </Stack>
    )

    return (
        <div className = 'page-top-header-root'>
            <h3>{navs[len - 1]}</h3>
            <div className = 'page-top-header-navs'>
                { renderNavs() }
            </div>
        </div>
    )
}

export default PageHeader
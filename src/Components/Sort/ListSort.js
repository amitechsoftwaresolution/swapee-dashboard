import React from 'react'

import {Grid, Button} from '@mui/material'
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight'
import FilterAlt from '@mui/icons-material/FilterAlt'

import SeondarySearchComponent from '../SearchBarComponent/SeondarySearchComponent'

import './ListSort.css'

const ListSort = ({title, count, searchValue, handleInputOnChange, handleSearchOnPress}) => {
    const renderListHeaderSearch = () => (
        <Grid item xs = {12} sm = {12} md = {6}>
            <SeondarySearchComponent 
                placeholder = "Search"
                name = "searchValue"
                value = {searchValue}
                handleOnChange = {handleInputOnChange}
                handleEnterOnPress = {handleSearchOnPress}
            />
        </Grid>
    )

    const renderListHeaderSort = () => (
        <Grid item xs = {12} sm = {12} md = {6} sx = {{display: "flex", justifyContent: "flex-end"}}>
            <div className = 'list-block-con-head-search-sortby'>
                <FilterAlt sx = {{
                    width: "20px", 
                    height: "20px",
                    color: "rgb(179, 157, 219)" 
                }}/>
                <Button variant = "text" sx = {{fontSize: "0.8rem", fontWeight: "550"}}>
                    Sort By Price: 
                </Button>
                <span>Low To High</span>
            </div>
        </Grid>
    )

    const renderListHeaderTitle = () => (
        <div className = 'list-block-con-head-title'>
            <h3>{title}</h3>
            <KeyboardDoubleArrowRight sx = {{
                alignSelf: "center", 
                mr: "5px", 
                ml: "5px",
                mb: "-2px",
                color: "rgb(158, 158, 158)"}}
            />
            <div className = 'showing-post-count-root'>
                <h5>Showing : </h5>
                <span>{count}</span>
            </div>
        </div>
    )

    return (
        <div className = 'list-block-con-head'>
            { renderListHeaderTitle() }
            <div className = 'list-block-con-head-search-sort'>
                <Grid container spacing = {1} sx = {{alignItems: "center"}}>
                    { renderListHeaderSort() }  
                    { renderListHeaderSearch() }
                </Grid>
            </div>
        </div>
    )
}

export default ListSort
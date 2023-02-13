import React from 'react'

import PriceFilter from "./PriceFilter"
import AccordionComponent from "../AccordionComponent/AccordionComponent"
import FilterSubItems from './FilterSubItems'

import {Box, Grid, Button} from '@mui/material'

import './Filter.css'

const Filter = ({
    filters, 
    marks, 
    values, 
    handleFilterCheckBoxToggle,
    handleFilterByPriceOnClick,
    handleFilterClear,
    getCheckedStateAttribute
}) => {

    const renderClearButton = () => (
        <Box sx = {{mt: "25px"}}>
            <Button 
                variant = "contained" 
                fullWidth 
                onClick = {handleFilterClear} 
                sx = {{
                    background: 'rgb(244, 67, 54)',
                    '&:hover': { background: 'rgb(198, 40, 40)'}
                }}
            >
            Clear All
            </Button>
        </Box>
    )

    const renderFilterButton = () => (
        <Box>
            <Button 
                variant = "outlined" 
                onClick = {handleFilterByPriceOnClick} 
                sx = {{
                    border: "2px solid #31e2f2",
                    '&:hover': { border: "2px solid #31e2f2" }
                }}
            >
            Filter
            </Button>
        </Box>
    )

    const renderFilterByPrice = () => (
        <Grid item xs = {12} sm = {12} md = {12}>
            <PriceFilter marks = {marks} />
            <div className = "price-filter-button-container">
                { renderFilterButton() }
            </div>
        </Grid>
    )

    const renderFilter = (item, idx) => {
        const {label, list} = item
        const name = getCheckedStateAttribute(label)
        return (
            <Grid item xs = {6} sm = {12} md = {12} key = {idx}>
                <FilterSubItems 
                    label = {label}
                    list = {list}
                    checked = {values[name]}
                    handleToggle = {handleFilterCheckBoxToggle}
                />
            </Grid>
        )
    }

    const renderFilters = () => (
        <Box sx = {{mt: "25px"}}>
            <Grid container spacing = {2}>
                { renderFilterByPrice() }
                { filters.map((item, idx) => { return renderFilter(item, idx) }) }
            </Grid>
            { renderClearButton() }
        </Box>
    )

    return (
        <div className = "filter-root">
            <AccordionComponent title = "FILTER BY">
                { renderFilters() }
            </AccordionComponent>
        </div>
    )
}

export default Filter
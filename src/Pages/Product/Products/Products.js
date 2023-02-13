import React, { Component } from 'react'

import PageHeader from '../../../Components/PageHeader/PageHeader'
import ListSort from '../../../Components/Sort/ListSort'
import Filter from '../../../Components/Filter/Filter'
import Paginator from '../../../Components/Paginator/Paginator'
import Product from '../../../Components/Product/Product'

import productsJson from '../../../Data/Json/products.json'

import {Grid} from '@mui/material'

import './Products.css'

class Products extends Component {
    state = {
        categoryChecked: [],
        genreChecked: [],
        searchValue: "",
        total: 10,
        current: 1,
        loading: false,
        postCount: 10,
    }

    navs = ["Dashboard", "Product", "Products"]

    filters = [
        {label: "Category", list: ["Men", "Women", "Kid"]},
        {label: "Genre", list: ["Action", "Adventure", "Comedy"]}
    ]

    marks = [
        {
          value: 0,
          label: '0',
        },
        {
          value: 10,
          label: '100',
        },
        {
          value: 50,
          label: '500',
        },
        {
          value: 100,
          label: '> 1000',
        },
    ]

    handleSearchOnPress = () => {

    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handlePaginationOnChange = (event, page) => {
        this.setState({ current: page })
    }

    handleFilterCheckBoxToggle = (label, index) => {
        let name = this.getCheckedStateAttribute(label)

        const checked = this.state[name]
        const currentIndex = checked.indexOf(index)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(index)
        } 
        else {
            newChecked.splice(currentIndex, 1)
        }

        this.setState({ [name]: newChecked })
    }

    handleFilterClear = () => {
        this.setState({ categoryChecked: [], genreChecked: []})
    }

    handleFilterByPriceOnClick = () => {
        this.setState({ filterByPrice: !this.state.filterByPrice })
    }

    getCheckedStateAttribute = (label) => {
        let name = ''
        switch(label) {
            case "Category": name = "categoryChecked"
                break
            case "Genre": name = "genreChecked"
                break
            default: name = "categoryChecked"
        }

        return name
    }

    renderNoDataAvailable = () => {
        return (
            <div className = "no_data_container">
                <div className = "no_data">
                    <h2>No Data Available</h2>
                </div>
            </div>
        )
    }

    renderPagination = () => {
        const {total, current} = this.state
        return (
            <Grid item xs = {12} sm = {12} md = {12}>
                <div className = 'list-pagination-root'>
                    <div className = 'rows-per-page'>Rows per page : 10</div>
                    <Paginator 
                        count = {total} 
                        page = {current} 
                        onChange = {this.handlePaginationOnChange}
                    />
                </div>
            </Grid>
        )
    }

    renderList = () => {
        return (
            <div className = 'product_list-items-block-root'>
                <Grid container spacing = {2}>
                    { productsJson.map((item, idx) => {
                        return (
                            <Grid item xs = {6} sm = {6} md = {4} key = {idx}>
                                <Product productData = {item} id = {idx}/>
                            </Grid>
                        )
                    }) }
                </Grid>
            </div>
        )
    }

    renderFilter = () => {
        return (
            <Filter
                filters = {this.filters}
                marks = {this.marks}
                values = {this.state}
                handleFilterCheckBoxToggle = {this.handleFilterCheckBoxToggle}
                getCheckedStateAttribute = {this.getCheckedStateAttribute}
                handleFilterClear = {this.handleFilterClear}
                handleFilterByPriceOnClick = {this.handleFilterByPriceOnClick}
            />
        )
    }

    renderListBlock = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {7} md = {9}>
                    { this.renderList() }
                </Grid>
                <Grid item xs = {12} sm = {5} md = {3}>
                    { this.renderFilter() }
                </Grid>
            </Grid>
        )
    }

    renderSort = () => {
        const {searchValue, postCount} = this.state
        return (
            <ListSort
                title = "Posts"
                count = {`${postCount} posts`}
                searchValue = {searchValue}
                handleInputOnChange = {this.handleInputOnChange}
                handleSearchOnPress = {this.handleSearchOnPress}
            />
        )
    }

    renderContents = () => {
        return (
            <div className = 'product-page-main-contents'>
                <PageHeader navs = {this.navs} />
                <div className = 'product-list-block-root'>
                    { this.renderSort() }
                    { this.renderListBlock() }
                </div>
                <div className = 'pagination-block-root'>
                    { this.renderPagination() }
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className = 'product-page-root'>
                { this.renderContents() }
            </div>
        )
    }
}

export default Products
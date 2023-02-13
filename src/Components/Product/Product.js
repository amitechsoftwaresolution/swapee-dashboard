import React from 'react'

import Status from '../Status/Status'

import { Box, Card, CardMedia, CardContent, Divider } from "@mui/material"

import './Product.css'
import sellerIcon from '../../Assets/Images/Common/seller.png'
import verifyIcon from '../../Assets/Images/Common/verify.png'
import product_6 from '../../Assets/Images/product_6.jpg'

import './Product.css'

const Product = ({productData}) => {
    const {title, description, price, date} = productData

    const renderContent = () => (
        <Box sx = {{ display: 'flex', flexDirection: 'column'}}>
            <CardContent sx = {{ flex: '1 0 auto' }}>
                <span> { title } </span>
                <p className = "product-content-des"> { description } </p>
                <p className = "product-conten-postedOn">Posted On : {date}</p>
                <span className = "product-content-price"> LKR { price } </span>
                <div className = "product-content-status">
                    <div className = "product-content-icons">
                        <img src = {sellerIcon} alt = "best-seller" style = {{width: "25px", height: "25px"}}/>
                        <img src = {verifyIcon} alt = "verify" style = {{width: "25px", height: "25px"}}/>
                    </div>
                    <Status status = "Feature" />
                    <Status status = "Urgent" />
                </div>
            </CardContent>
        </Box>
    )

    const renderMedia = () => (
        <CardMedia component = "img" sx = {{height: "200px"}} image = {product_6} alt = {title} />
    )

    return (
        <Card
            sx = {{
                backgroundColor: "rgb(255, 255, 255)",
                boxShadow: "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
                borderRadius: "16px"
            }}
        >
        { renderMedia() }
        { renderContent() }
        <Divider sx = {{ background: "#F8F9F9", opacity: "0.2"}} />
        </Card>
    )
}

export default Product
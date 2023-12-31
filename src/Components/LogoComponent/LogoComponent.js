import React from "react"

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import {Typography, Box} from "@mui/material"

const LogoComponent = (props) => {
    return(
        <>
            <Box color = "background.paper" sx = {{display: {xs: 'flex', md: 'flex'},flexGrow:{xs:1, md:2.5},
                justifyContent:{xs:props.position} }} >
                <AddShoppingCartIcon sx = {{m:{xs:1.5}, color: '#db5f51'}} />
                <Typography 
                    sx = {{mt:{xs:1, md:1}, margin:'12px 0 0 0', color: props.textColor ? props.textColor : "#fff"}} 
                    color = {props.textColor} 
                    variant = "h6" 
                    fontWeight = "fontWeightBold" 
                    noWrap 
                    component = "a" 
                >
                    SWAPEE
                </Typography>
            </Box>
        </>
    )
}

export default LogoComponent
import React from 'react'

import Button from "@mui/material/Button"

const SecodaryButtonWidget = ({name, onClick}) => {
    return (
        <>
            <Button
                sx = {{
                    margin: '0px',
                    width: '100%',
                    height: '50px',
                    borderRadius: '5px',
                    color: 'rgb(86, 101, 115)',
                    textAlign: 'center',
                    background: 'transparent',
                    alignItems: "center",
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "center",
                    boxShadow: 'rgb(86 101 115 / 24%) 0px 8px 16px 0px',
                    fontSize: "0.75rem",
                    letterSpacing: "0.1rem"
                }}
                onClick = {onClick}
            >
                {name}
            </Button>
        </>
    )
}

export default SecodaryButtonWidget
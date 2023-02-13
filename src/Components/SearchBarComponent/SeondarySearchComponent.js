import React from 'react'

import { styled, alpha } from '@mui/material/styles'
import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchInput = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '5px',
    backgroundColor: alpha('#000', 0.1),
    '&:hover': {
      backgroundColor: alpha('#000', 0.2),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    }
}))
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    fontWeight: "500",
    color: '#000',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '35ch',
            },
        },
    },
}))

const SeondarySearchComponent = ({placeholder, name, value, xs, handleOnChange, handleEnterOnPress}) => {
    return (
        <SearchInput sx = {{display: {xs: xs, md: 'block'}}}>
            <SearchIconWrapper> <SearchIcon /> </SearchIconWrapper>
            <StyledInputBase 
                placeholder = {placeholder} 
                inputProps = {{ 'aria-label': 'search' }}
                name = {name}
                value = {value}
                onChange = {handleOnChange}
                onKeyDown = {e => e.key === 'Enter' && handleEnterOnPress()}
            />
        </SearchInput>
    )
}

export default SeondarySearchComponent
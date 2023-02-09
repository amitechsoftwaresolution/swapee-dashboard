import React from 'react'

import InputField from '../../Components/Input/InputField'
import PasswordField from '../../Components/Input/PasswordField'
import SignInButtonWidget from '../../Components/Button/ButtonWidget'
import CancelButton from '../../Components/Button/SecodaryButtonWidget'

import {Grid, Box} from '@mui/material'

import './Login.css'

const LoginForm = ({state, handleInputOnChange, handleShowPasswordOnClick, handleCancelOnClick, handleLoginOnClick}) => {

    const renderButtonFooter = () => {
        return (
            <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "10px"}}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <CancelButton onClick = {handleCancelOnClick} name = "Cancel" />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
                    <SignInButtonWidget 
                        name = "Sign In" 
                        background = "#31e2f2"
                        onClick = {handleLoginOnClick}    
                    />
                </Grid>
            </Grid>
        )
    }

    const renderPasswordField = (name, label, placeholder) => {
        const {showPassword, passwordType} = state
        const values = {name, label, placeholder, value: state[name], showPassword, passwordType}
        return (
            <div className = "signin_form-input_wrapper">
                <PasswordField 
                    values = {values}
                    handleOnChange = {handleInputOnChange}
                    handleShowPasswordOnClick = {handleShowPasswordOnClick}
                />
            </div>
        )
    }

    const renderInputField = (name, label, placeholder) => {
        return (
            <div className = "login_form-input_wrapper">
                <InputField 
                    name = {name}
                    label = {label}
                    placeholder = {placeholder}
                    value = {state[name]}
                    handleOnChange = {handleInputOnChange}
                />
            </div>
        )
    }

    return (
        <Grid container>
            <Grid item xs = {1} sm = {2} md = {3} />
            <Grid item xs = {10} sm = {8} md = {6}>
                <Box sx = {{my: 10, display: 'flex', flexDirection: 'column'}}>
                    <div className = 'login-form'>
                        <div className = 'login-form-input-container'>
                            { renderInputField("email", "Email", "Email address") }
                            { renderPasswordField("password", "Password", "Password") }
                            { renderButtonFooter() }
                        </div>
                    </div>
                </Box>
            </Grid>
            <Grid item xs = {1} sm = {2} md = {3} />
        </Grid>
    )
}

export default LoginForm
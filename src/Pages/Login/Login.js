import React, { Component } from 'react'

import {connect} from 'react-redux'

import LoginForm from './LoginForm'
import SnackBarAlert from '../../Components/SnackBarAlert/SnackBarAlert'
import Loading from '../../Components/Loading/Loading'

import { storeLoginResponse } from '../../Redux/Actions/authAction'

import './Login.css'

class Login extends Component {
    state = {
        email: "swapeeTest@gmail.com",
        password: "swapee12345",
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false,
        showPassword: false,
        passwordType: "password"
    }

    authResponse = {
        email: "swapeeTest@gmail.com",
        name: "Swapee",
        token: "sff52df12a1sd251sdfwa3s5dZd5dz4d",
        expiration: 12,
        role: "ADMIN"
    } // dummy auth response for ui design purpose

    handleLogin = (data) => {
        const {email, password} = data
        if (email === "swapeeTest@gmail.com" && password === "swapee12345") {
            const loginResponse = this.authResponse
            this.props.storeLoginResponse(loginResponse)
            this.setSuccessSnackBar("Login successfull")
            window.location.href = "/dashboard"
        } else {
            this.setErrorSnackBar('Invalid credentials, please try again')
        }
    }

    handleLoginOnClick = () => {
        const {email, password} = this.state
        if (email && password) {
            const result = this.validateEmail(email)
            if (!result) {
                this.setErrorSnackBar('Enter a valid email address')
            }
            else {
                const data = {email, password}
                this.handleLogin(data)
            }
        }
        else {
            this.setErrorSnackBar('Fields cannot be empty' )
        }
    }

    handleCancelOnClick = () => {
        this.setState({email: "", password: "", passwordType: "password"})
    }

    handleShowPasswordOnClick = () => {
        const {showPassword} = this.state

        let passwordType = showPassword ? "password" : "text"

        this.setState({ showPassword: !showPassword, passwordType })
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    setSuccessSnackBar = (message) => {
        this.setSnackBar("success", message, true)
    }

    setErrorSnackBar = (message) => {
        this.setSnackBar("error", message, true)
    }

    setSnackBar = (severity, message, openSnackBar) => {
        this.setState({ severity, message, openSnackBar })
    }

    validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(email)
    }

    renderSnackBar = () => {
        const {openSnackBar, severity, message} = this.state
        return (
            <SnackBarAlert 
                open = {openSnackBar} 
                severity = {severity} 
                message = {message} 
                handleClose = {this.handleSnackBarClose}
            />
        )
    }

    render() {
        const {openSnackBar, loading} = this.state
        return (
            <div className = 'login-page-root'>
                <LoginForm 
                    state = {this.state} 
                    handleInputOnChange = {this.handleInputOnChange}
                    handleShowPasswordOnClick = {this.handleShowPasswordOnClick}
                    handleCancelOnClick = {this.handleCancelOnClick}
                    handleLoginOnClick = {this.handleLoginOnClick}
                />
                { openSnackBar && this.renderSnackBar() }
                { loading && <Loading open = {loading} /> }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeLoginResponse: data => { dispatch(storeLoginResponse(data)) }
    }
}

export default connect(null, mapDispatchToProps)(Login)
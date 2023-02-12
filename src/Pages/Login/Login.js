import React, { Component } from 'react'

import LoginForm from './LoginForm'
import SnackBarAlert from '../../Components/SnackBarAlert/SnackBarAlert'
import Loading from '../../Components/Loading/Loading'

import './Login.css'

class Login extends Component {
    state = {
        email: "",
        password: "",
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false,
        showPassword: false,
        passwordType: "password"
    }

    handleLogin = (data) => {
        
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

export default Login
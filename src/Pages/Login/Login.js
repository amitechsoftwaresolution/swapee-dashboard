import React, { Component } from 'react'

import LoginForm from './LoginForm'

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

    handleLoginOnClick = () => {
        const {email, password} = this.state
        if (email && password) {
            const result = this.validateEmail(email)
            if (!result) {
                this.setErrorSnackBar('Enter a valid email address')
            }
            else {
                const data = {email, password}
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
            </div>
        )
    }
}

export default Login
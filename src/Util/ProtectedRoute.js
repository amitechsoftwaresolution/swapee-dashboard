import React from 'react'
import { Navigate } from "react-router-dom"
import {connect} from 'react-redux'

const ProtectedRoute = ({children, authResponse}) => {
    if (!authResponse) {
        return <Navigate to = "/" />
    }

    return children
}

const mapStateToProps = state => ({
    authResponse: state.auth.authResponse
})

export default connect(mapStateToProps)(ProtectedRoute)
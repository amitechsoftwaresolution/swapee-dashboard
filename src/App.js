import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Dashboard from './Pages/Dashboard/Dashboard'
import Login from './Pages/Login/Login'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import ProtectedRoute from './Util/ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index = {true} path = "/" element = {<Login />} />
        <Route path = "/dashboard"
          element = {
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path = "*" element = {<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
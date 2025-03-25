import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
        </Routes>
    )
}

export default AppRoutes

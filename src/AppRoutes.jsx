import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, NotFound } from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes

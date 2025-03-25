import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ProtectedRoute from './lib/ProtectedRoute'
import { Login, NotFound } from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />

            <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes

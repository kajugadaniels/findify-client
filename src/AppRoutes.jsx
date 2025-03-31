import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ProtectedRoute from './lib/ProtectedRoute'
import { AddUser, Dashboard, EditUser, GetUsers, Login, NotFound, UserDetails } from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />

            <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/users" element={<GetUsers />} />
                    <Route path="/user/add" element={<AddUser />} />
                    <Route path="/user/:id" element={<UserDetails />} />
                    <Route path="/user/edit/:id" element={<EditUser />} />
                </Route>
            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes

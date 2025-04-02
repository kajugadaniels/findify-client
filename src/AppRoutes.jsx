import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ProtectedRoute from './lib/ProtectedRoute'
import { AddUser, CustomerProfile, Dashboard, EditUser, ForgetPassword, GetUsers, Login, NotFound, Profile, Register, UserDetails, VendorProfile, Welcome } from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Welcome />} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forget-password' element={<ForgetPassword />} />
            <Route path="/customer/update/:userId" element={<CustomerProfile />} />
            <Route path="/vendor/update/:userId" element={<VendorProfile />} />

            <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/users" element={<GetUsers />} />
                    <Route path="/user/add" element={<AddUser />} />
                    <Route path="/user/:id" element={<UserDetails />} />
                    <Route path="/user/edit/:id" element={<EditUser />} />

                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes

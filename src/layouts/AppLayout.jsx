import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div>
            AppLayout

            <Outlet />
        </div>
    )
}

export default AppLayout
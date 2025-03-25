import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react'
import { Navbar, Sidebar } from '../components';

const AppLayout = () => {
    return (
        <div className="razor background min-h-screen before:content-[''] before:bg-gradient-to-b before:from-slate-100 before:to-slate-50 before:h-screen before:w-full before:fixed before:top-0 after:content-[''] after:fixed after:inset-0 after:bg-[radial-gradient(rgb(0_0_0_/_10%)_1px,_transparent_0)] after:bg-[length:25px_25px]">
            <div className="[&.loading-page--before-hide]:h-screen [&.loading-page--before-hide]:relative loading-page [&.loading-page--before-hide]:before:block [&.loading-page--hide]:before:opacity-0 before:content-[''] before:transition-opacity before:duration-300 before:hidden before:inset-0 before:h-screen before:w-screen before:fixed before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:z-[60] [&.loading-page--before-hide]:after:block [&.loading-page--hide]:after:opacity-0 after:content-[''] after:transition-opacity after:duration-300 after:hidden after:h-16 after:w-16 after:animate-pulse after:fixed after:opacity-50 after:inset-0 after:m-auto after:bg-loading-puff after:bg-cover after:z-[61]">
                <div className="xl:ml-0 shadow-xl transition-[margin] duration-300 xl:shadow-none fixed top-0 left-0 z-50 side-menu group inset-y-0 xl:py-3.5 xl:pl-3.5 after:content-[''] after:fixed after:inset-0 after:bg-black/80 after:xl:hidden [&.side-menu--mobile-menu-open]:ml-0 [&.side-menu--mobile-menu-open]:after:block -ml-[275px] after:hidden">

                    <div className="close-mobile-menu fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden z-50 [&.close-mobile-menu--mobile-menu-open]:flex hidden">
                        <Link className="ml-5 mt-5" to="/dashboard">
                            <X className="stroke-[1] h-8 w-8 text-white" />
                        </Link>
                    </div>

                    <Sidebar />

                    <Navbar />

                    <Outlet />

                </div>
            </div>
        </div>
    )
}

export default AppLayout
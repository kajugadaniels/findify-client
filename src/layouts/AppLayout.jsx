import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Sidebar, Navbar } from '../components';
import { X } from 'lucide-react';

const AppLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="razor background min-h-screen before:content-[''] before:bg-gradient-to-b before:from-slate-100 before:to-slate-50 before:h-screen before:w-full before:fixed before:top-0 after:content-[''] after:fixed after:inset-0 after:bg-[radial-gradient(rgb(0_0_0_/_10%)_1px,_transparent_0)] after:bg-[length:25px_25px]">
            <div className={`side-menu xl:ml-0 shadow-xl transition-[margin,padding] duration-300 xl:shadow-none fixed top-0 left-0 z-50 group inset-y-0 xl:py-3.5 xl:pl-3.5 ${isSidebarOpen ? 'ml-0' : '-ml-[275px]'} xl:ml-0`}>
                <div className={`fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden z-50 ${isSidebarOpen ? 'flex' : 'hidden'}`}>
                    <button onClick={closeSidebar} className="mt-5 ml-5 text-primary">
                        <X className="stroke-[1] h-8 w-8 text-primary" />
                    </button>
                </div>
                <Sidebar />
                <Navbar toggleSidebar={toggleSidebar} />
            </div>
            <Outlet />
        </div>
    );
};

export default AppLayout;

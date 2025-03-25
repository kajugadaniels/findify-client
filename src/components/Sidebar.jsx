import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Accessibility, ClipboardList, Hospital, House, Key, Umbrella, UserCog } from 'lucide-react';
import Logo from '../assets/img/logo-black.png'

const Sidebar = () => {
    const { pathname } = useLocation()

    // Check active state for each sidebar item.
    const isDashboardActive = pathname === '/dashboard'

    return (
        <>
            <div className="flex-none hidden xl:flex items-center z-10 px-5 h-[65px] w-[275px] overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]">
                <Link className="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0 group-[.side-menu--collapsed]:xl:ml-2" to="/dashboard">
                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-white transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
                        <img src='/logo-black.png' alt="MediSoft Logo" />
                    </div>
                    <div className="ml-3.5 font-medium transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0">
                        Garagify
                    </div>
                </Link>
            </div>

            <div className="scrollable-ref w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent [&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30">
                <ul className="scrollable">
                    <li className="bg-white text-primary/10 border rounded-lg border-primary/10">
                        <NavLink
                            to="/dashboard"
                            className={() =>
                                `side-menu ${isDashboardActive ? 'side-menu--active' : ''}`
                            }
                        >
                            <House className="stroke-[1] w-5 h-5 side-menu__link__icon" />
                            <div className="side-menu__link__title">Dashboard</div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;

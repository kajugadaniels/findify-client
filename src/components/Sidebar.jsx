import { ArrowLeft, Car, GaugeCircle } from 'lucide-react'
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const { pathname } = useLocation()

    // Check active state for each sidebar item.
    const isDashboardActive = pathname === '/dashboard'

    return (
        <div className="side-menu__content h-full box border-transparent rounded-none xl:rounded-xl bg-gradient-to-b from-theme-1 to-theme-2 z-20 relative w-[275px] duration-300 transition-[width] group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] overflow-hidden flex flex-col after:content-[''] after:absolute after:inset-0 after:-mr-4 after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-20rem] after:bg-no-repeat">
            <div className="flex-none hidden xl:flex items-center z-10 px-5 h-[65px] xl:w-[275px] overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] before:content-[''] before:absolute before:right-0 before:border-r before:border-dashed before:border-white/[0.15] before:h-4/6 before:group-[.side-menu--collapsed.side-menu--on-hover]:xl:hidden">
                <Link className="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0 group-[.side-menu--collapsed]:xl:ml-4" to="/dashboard">
                    <div className="transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
                        <div className="relative h-[18px] w-[18px] -rotate-45 [&_div]:bg-white">
                            <div className="absolute inset-y-0 left-0 my-auto h-[75%] w-[21%] rounded-full opacity-50"></div>
                            <div className="absolute inset-0 m-auto h-[120%] w-[21%] rounded-full"></div>
                            <div className="absolute inset-y-0 right-0 my-auto h-[75%] w-[21%] rounded-full opacity-50"></div>
                        </div>
                    </div>
                    <div className="ml-3.5 font-medium text-white transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0">
                        Garagify
                    </div>
                </Link>
                <Link className="toggle-compact-menu ml-auto hidden h-[20px] w-[20px] items-center justify-center rounded-full border border-white/40 text-white transition-[opacity,transform] hover:bg-white/5 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 3xl:flex" to="/dashboard">
                    <ArrowLeft className="h-3.5 w-3.5 stroke-[1.3]" />
                </Link>
            </div>
            <div className="scrollable-ref w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent [&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30">
                <div className="simplebar-wrapper">
                    <ul className="scrollable">
                        <li className="side-menu__divider">DASHBOARDS</li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={() =>
                                    `side-menu__link ${isDashboardActive ? 'side-menu__link--active' : ''}`
                                }
                            >
                                <GaugeCircle className="stroke-[1] w-5 h-5 side-menu__link__icon" />
                                <div className="side-menu__link__title">Dashboard</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
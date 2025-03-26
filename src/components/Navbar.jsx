import { Power, Users } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="fixed h-[65px] transition-[margin] duration-100 xl:ml-[275px] group-[.side-menu--collapsed]:xl:ml-[90px] mt-3.5 inset-x-0 top-0 before:content-[''] before:mx-5 before:absolute before:top-0 before:inset-x-0 before:-mt-[15px] before:h-[20px] before:backdrop-blur">
            <div className="box group absolute left-0 right-0 mx-5 h-full transition-colors duration-200 ease-in-out before:absolute before:inset-x-4 before:top-0 before:z-[-1] before:mx-auto before:mt-3 before:h-full before:rounded-lg before:border before:border-slate-200 before:bg-slate-50 before:shadow-sm before:content-[''] before:dark:border-darkmode-500/60 before:dark:bg-darkmode-600/70 xl:left-3.5">
                <div className="flex h-full w-full items-center px-5 transition-[padding] duration-300 ease-in-out">
                    <nav aria-label="breadcrumb" className="flex hidden flex-1 xl:block">
                        <ol className="flex items-center text-theme-1 dark:text-slate-300">
                            <li className="">
                                <a href="">Dashboard</a>
                            </li>
                        </ol>
                    </nav>
                    <div className="flex flex-1 items-center">
                        <div className="ml-auto flex items-center gap-1">
                            <div className="mr-5 text-right">
                                <div className="font-bold text-primary text-md">Admin</div>
                                <span className="text-sm text-secondary">Role</span>
                            </div>
                        </div>
                        <div className="dropdown relative ml-5">
                            <button className="cursor-pointer image-fit h-[36px] w-[36px] overflow-hidden rounded-full border-[3px] border-slate-200/70">
                                <img src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" alt="Garagify" />
                            </button>
                            <div className="dropdown-menu absolute z-[9999] hidden">
                                <div data-tw-merge="" className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-1 w-56">
                                    <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400"></div>
                                    <Link to="" className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <Users className="stroke-[1] mr-2 h-4 w-4" />
                                        Profile Info
                                    </Link>
                                    <Link to="" className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <Power className="stroke-[1] mr-2 h-4 w-4" />
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
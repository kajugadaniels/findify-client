import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser, verifyToken } from '../api';
import { toast } from 'react-toastify';
import { AlignJustify, Users, Search, Power } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userName, setUserName] = useState('User');
    const [userRole, setUserRole] = useState('Role');
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await verifyToken();
                if (response && response.user) {
                    const user = response.user;
                    setUserName(user.name || 'User');
                    setUserRole(user.role || 'Role');
                    localStorage.setItem('user', JSON.stringify(user));
                }
            } catch (error) {
                console.error('Error verifying token:', error);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
        };

        fetchUserData();

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = async () => {
        try {
            await logoutUser();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('refresh');
            toast.success('You have successfully logged out.');
            navigate('/');
        } catch (error) {
            toast.error('An error occurred during logout. Please try again.');
        }
    };

    return (
        <div className="fixed h-[65px] transition-[margin] duration-100 xl:ml-[275px] group-[.side-menu--collapsed]:xl:ml-[90px] mt-3.5 inset-x-0 top-0 before:content-[''] before:mx-5 before:absolute before:top-0 before:inset-x-0 before:-mt-[15px] before:h-[20px] before:backdrop-blur">
            <div className="box group absolute left-0 right-0 mx-5 h-full transition-colors duration-200 ease-in-out before:absolute before:inset-x-4 before:top-0 before:z-[-1] before:mx-auto before:mt-3 before:h-full before:rounded-lg before:border before:border-slate-200 before:bg-slate-50 before:shadow-sm before:content-[''] before:dark:border-darkmode-500/60 before:dark:bg-darkmode-600/70 xl:left-3.5">
                <div className="flex h-full w-full items-center px-5 transition-[padding] duration-300 ease-in-out">
                    <div className="flex items-center gap-1 xl:hidden">
                        <button className="open-mobile-menu rounded-full p-2 hover:bg-slate-100" onClick={toggleSidebar}>
                            <AlignJustify className="stroke-[1] h-[18px] w-[18px]" />
                        </button>
                        <Link className="rounded-full p-2 hover:bg-slate-100" to="#">
                            <Search className="stroke-[1] h-[18px] w-[18px]" />
                        </Link>
                    </div>
                    <nav aria-label="breadcrumb" className="flex hidden flex-1 xl:block">
                        <ol className="flex items-center text-theme-1 dark:text-slate-300">
                            <li className="">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        </ol>
                    </nav>
                    <div className="flex flex-1 items-center">
                        <div className="ml-auto flex items-center gap-1">
                            <div className="mr-5 text-right">
                                <div className="font-bold text-primary text-md">{userName}</div>
                                <span className="text-sm text-secondary">{userRole}</span>
                            </div>
                        </div>
                        <div className="dropdown relative ml-5">
                            <button
                                onClick={toggleDropdown}
                                aria-expanded={dropdownOpen}
                                className="cursor-pointer image-fit h-[36px] w-[36px] overflow-hidden rounded-full border-[3px] border-slate-200/70"
                            >
                                <img src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg" alt="Findify" />
                            </button>
                            <div
                                className={`dropdown-menu absolute right-0 mt-2 z-[9999] ${dropdownOpen ? 'block' : 'hidden'}`}
                            >
                                <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-1 w-56">
                                    <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400"></div>
                                    <Link to="/profile" className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <Users className="stroke-[1] mr-2 h-4 w-4" />
                                        Profile Info
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                                    >
                                        <Power className="stroke-[1] mr-2 h-4 w-4" />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

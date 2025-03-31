import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowDownWideNarrow, CheckSquare, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Download, FileBarChart, Key, MoreVertical, PenLine, Search, Trash2 } from 'lucide-react'

const GetUsers = () => {
    const navigate = useNavigate();

    const handleShowUser = (userId) => {
        navigate(`/user/${userId}`);
    };

    const handleEditUser = (userId) => {
        navigate(`/user/edit/${userId}`);
    };

    const handleDeleteUser = async (userId) => {
        toast.info(`Delete functionality not implemented yet for ID: ${userId}`)
    };

    return (
        <div className="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[65px] pb-16 relative z-10 content--compact xl:ml-[275px] [&.content--compact]:xl:ml-[91px]">
            <div className="mt-14 px-5">
                <div className="container">
                    <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                        <div className="col-span-12">
                            <div className="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
                                <div className="text-base font-medium group-[.mode--light]:text-white">Users
                                </div>
                                <div className="flex flex-col gap-x-3 gap-y-2 sm:flex-row md:ml-auto">
                                    <button
                                        className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary group-[.mode--light]:!border-transparent group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200"
                                        onClick={() => navigate('/user/add')}
                                    >
                                        <PenLine className="mr-2 h-4 w-4 stroke-[1.3]" />
                                        Add New User
                                    </button>
                                </div>
                            </div>
                            <div className="mt-3.5 flex flex-col gap-8">
                                <div className="box box--stacked flex flex-col p-5">
                                    <div className="grid grid-cols-4 gap-5">
                                        <div className="box col-span-4 rounded-[0.6rem] border border-dashed border-slate-300/80 p-5 shadow-sm md:col-span-2 xl:col-span-1">
                                            <div className="text-base text-slate-500">Registered Users</div>
                                            <div className="mt-1.5 text-2xl font-medium">457,204</div>
                                        </div>
                                        <div className="box col-span-4 rounded-[0.6rem] border border-dashed border-slate-300/80 p-5 shadow-sm md:col-span-2 xl:col-span-1">
                                            <div className="text-base text-slate-500">Active Users</div>
                                            <div className="mt-1.5 text-2xl font-medium">122,721</div>
                                        </div>
                                        <div className="box col-span-4 rounded-[0.6rem] border border-dashed border-slate-300/80 p-5 shadow-sm md:col-span-2 xl:col-span-1">
                                            <div className="text-base text-slate-500">New Users</div>
                                            <div className="font-mediumm mt-1.5 text-2xl">489,223</div>
                                        </div>
                                        <div className="box col-span-4 rounded-[0.6rem] border border-dashed border-slate-300/80 p-5 shadow-sm md:col-span-2 xl:col-span-1">
                                            <div className="text-base text-slate-500">Login Activity</div>
                                            <div className="font-mediumm mt-1.5 text-2xl">411,259</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box box--stacked flex flex-col">
                                    <div className="flex flex-col gap-y-2 p-5 sm:flex-row sm:items-center">
                                        <div>
                                            <div className="relative">
                                                <Search className="absolute inset-y-0 left-0 z-10 my-auto ml-3 h-4 w-4 stroke-[1.3] text-slate-500" />
                                                <input type="text" placeholder="Search users..." className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-[0.5rem] pl-9 sm:w-64" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-x-3 gap-y-2 sm:ml-auto sm:flex-row">
                                            <div data-tw-placement="bottom-end" className="dropdown relative">
                                                <button aria-expanded="false" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 w-full sm:w-auto">
                                                    <Download className="mr-2 h-4 w-4 stroke-[1.3]" />
                                                    Export
                                                    <ChevronDown className="ml-2 h-4 w-4 stroke-[1.3]" />
                                                </button>
                                                <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden">
                                                    <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                                            <FileBarChart className="stroke-[1] mr-2 h-4 w-4" />
                                                            PDF
                                                        </a>
                                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                                            <FileBarChart className="stroke-[1] mr-2 h-4 w-4" />
                                                            CSV
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown relative inline-block">
                                                <button aria-expanded="false" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 w-full sm:w-auto">
                                                    <ArrowDownWideNarrow className="mr-2 h-4 w-4 stroke-[1.3]" />
                                                    Filter
                                                    <span className="ml-2 flex h-5 items-center justify-center rounded-full border bg-slate-100 px-1.5 text-xs font-medium">
                                                        3
                                                    </span>
                                                </button>
                                                <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden">
                                                    <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600">
                                                        <div className="p-2">
                                                            <div>
                                                                <div className="text-left text-slate-500">
                                                                    Role
                                                                </div>
                                                                <select className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 mt-2 flex-1">
                                                                    <option value="Mechanic">
                                                                        Mechanic
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            <div className="mt-3">
                                                                <div className="text-left text-slate-500">
                                                                    Latest
                                                                </div>
                                                                <select className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 mt-2 flex-1">
                                                                    <option value="Newest">
                                                                        Newest
                                                                    </option>
                                                                </select>
                                                                <select className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 mt-2 flex-1">
                                                                    <option value="Latest">
                                                                        Latest
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            <div className="mt-4 flex items-center">
                                                                <button className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-secondary/70 border-secondary/70 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-400 dark:text-slate-300 [&:hover:not(:disabled)]:bg-slate-100 [&:hover:not(:disabled)]:border-slate-100 [&:hover:not(:disabled)]:dark:border-darkmode-300/80 [&:hover:not(:disabled)]:dark:bg-darkmode-300/80 ml-auto w-32">Close</button>
                                                                <button className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary ml-2 w-32">Apply</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overflow-auto xl:overflow-visible">
                                        <table className="w-full text-left border-b border-slate-200/60">
                                            <thead className="">
                                                <tr className="">
                                                    <td className="px-5 border-b dark:border-darkmode-300 w-5 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500">
                                                        <input type="checkbox" className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50" />
                                                    </td>
                                                    <td className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500">
                                                        Name
                                                    </td>
                                                    <td className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500">
                                                        Email
                                                    </td>
                                                    <td className="px-5 border-b dark:border-darkmode-300 w-52 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500">
                                                        Phone Number
                                                    </td>
                                                    <td className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 text-center font-medium text-slate-500">
                                                        Role
                                                    </td>
                                                    <td className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500">
                                                        Joined Date
                                                    </td>
                                                    <td className="px-5 border-b dark:border-darkmode-300 w-20 border-t border-slate-200/60 bg-slate-50 py-4 text-center font-medium text-slate-500">
                                                        Action
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="[&_td]:last:border-b-0">
                                                    <td className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600">
                                                        <input type="checkbox" className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50" />
                                                    </td>
                                                    <td className="px-5 border-b dark:border-darkmode-300 w-80 border-dashed py-4 dark:bg-darkmode-600">
                                                        <div className="flex items-center">
                                                            <div className="image-fit zoom-in h-9 w-9">
                                                                <img src="https://tailwise-html.vercel.app/dist/images/users/user3-50x50.jpg" alt="" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" />
                                                            </div>
                                                            <div className="ml-3.5">
                                                                <a className="whitespace-nowrap font-medium" href="">
                                                                    Leonardo DiCaprio
                                                                </a>
                                                                <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600">
                                                        <a className="whitespace-nowrap font-medium" href="">
                                                            Support Specialist
                                                        </a>
                                                        <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">

                                                        </div>
                                                    </td>
                                                    <td className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600">
                                                        <div className="w-40">
                                                            <div className="text-xs text-slate-500">
                                                                65%
                                                            </div>
                                                            <div className="mt-1.5 flex h-1 rounded-sm border bg-slate-50">
                                                                <div className="first:rounded-l-sm last:rounded-r-sm border border-primary/20 -m-px bg-primary/40 w-[35%]"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600">
                                                        <div className="flex items-center justify-center text-danger">
                                                            <Key className="h-3.5 w-3.5 stroke-[1.7]" />
                                                            <div className="ml-1.5 whitespace-nowrap">
                                                                Active
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600">
                                                        <div className="whitespace-nowrap">
                                                            May 5, 2018
                                                        </div>
                                                    </td>
                                                    <td className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600">
                                                        <div className="flex items-center justify-center">
                                                            <div data-tw-placement="bottom-end" className="dropdown relative h-5">
                                                                <button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer h-5 w-5 text-slate-500">
                                                                    <MoreVertical className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70" />
                                                                </button>
                                                                <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden">
                                                                    <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                                                                        <button
                                                                            className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                                                                            onClick={() => handleEditUser(menuId)}
                                                                        >
                                                                            <CheckSquare className="stroke-[1] mr-2 h-4 w-4" />
                                                                            Edit
                                                                        </button>
                                                                        <button
                                                                            className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger"
                                                                            onClick={() => handleDeleteUser(menuId)}
                                                                        >
                                                                            <Trash2 className="stroke-[1] mr-2 h-4 w-4" />
                                                                            Delete
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex-reverse flex flex-col-reverse flex-wrap items-center gap-y-2 p-5 sm:flex-row">
                                        <nav className="mr-auto w-full flex-1 sm:w-auto">
                                            <ul className="flex w-full mr-0 sm:mr-auto sm:w-auto">
                                                <li className="flex-1 sm:flex-initial">
                                                    <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">
                                                        <ChevronsLeft className="stroke-[1] h-4 w-4" />
                                                    </a>
                                                </li>
                                                <li className="flex-1 sm:flex-initial">
                                                    <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">
                                                        <ChevronLeft className="stroke-[1] h-4 w-4" />
                                                    </a>
                                                </li>
                                                <li className="flex-1 sm:flex-initial">
                                                    <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">...</a>
                                                </li>
                                                <li className="flex-1 sm:flex-initial">
                                                    <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">1</a>
                                                </li>
                                                <li className="flex-1 sm:flex-initial">
                                                    <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3 !box dark:bg-darkmode-400">2</a>
                                                </li>
                                                <li className="flex-1 sm:flex-initial">
                                                    <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">3</a>
                                                </li>
                                                <li className="flex-1 sm:flex-initial">
                                                    <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">...</a>
                                                </li>
                                                <li className="flex-1 sm:flex-initial">
                                                    <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">
                                                        <ChevronRight className="stroke-[1] h-4 w-4" />
                                                    </a>
                                                </li>
                                                <li className="flex-1 sm:flex-initial">
                                                    <a className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">
                                                        <ChevronsRight className="stroke-[1] h-4 w-4" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetUsers
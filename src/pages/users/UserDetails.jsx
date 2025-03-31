import { Eye, Key, PenSquare, User2 } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const navigate = useNavigate();

    const handleEditUser = (userId) => {
        navigate(`/user/edit/${userId}`);
    };

    return (
        <div className="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[65px] pb-16 relative z-10 content--compact xl:ml-[275px] [&.content--compact]:xl:ml-[91px]">
            <div className="mt-14 px-5">
                <div className="container">
                    <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                        <div className="col-span-12">
                            <div className="flex flex-col gap-y-3 lg:h-10 lg:flex-row lg:items-center">
                                <div className="flex items-center text-lg font-medium group-[.mode--light]:text-white">
                                    Users
                                </div>
                                <div className="flex flex-col gap-x-3 gap-y-2 sm:flex-row md:ml-auto">
                                    <button
                                        className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary group-[.mode--light]:!border-transparent group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200"
                                        onClick={() => navigate('/users')}
                                    >
                                        <Eye className="mr-2 h-4 w-4 stroke-[1.3]" />
                                        Go Back
                                    </button>
                                </div>
                            </div>
                            <div className="mt-3.5 grid grid-cols-10 gap-5">
                                <div className="col-span-12 xl:col-span-3">
                                    <div className="box box--stacked flex flex-col p-5">
                                        <div className="flex flex-col gap-5">
                                            <div className="relative mt-3 rounded-[0.6rem] border border-slate-200/80 dark:border-darkmode-400">
                                                <div className="absolute left-0 -mt-2 ml-4 bg-white px-3 text-xs uppercase text-slate-500">
                                                    <div className="-mt-px">
                                                        User Details
                                                    </div>
                                                </div>
                                                <div className="mt-2.5 flex flex-col gap-5 p-5">
                                                    <div className="flex items-center">
                                                        <User2 className="mr-2.5 h-4 w-4 stroke-[1.3] text-slate-500" />
                                                        <div className="flex w-full flex-col flex-wrap gap-y-1 sm:flex-row sm:items-center">
                                                            <div className="w-54 sm:mr-auto">
                                                                Name:
                                                            </div>
                                                            John Doe
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <User2 className="mr-2.5 h-4 w-4 stroke-[1.3] text-slate-500" />
                                                        <div className="flex w-full flex-col flex-wrap gap-y-1 sm:flex-row sm:items-center">
                                                            <div className="w-54 sm:mr-auto">
                                                                Email Address:
                                                            </div>
                                                            john@doe.com
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <User2 className="mr-2.5 h-4 w-4 stroke-[1.3] text-slate-500" />
                                                        <div className="flex w-full flex-col flex-wrap gap-y-1 sm:flex-row sm:items-center">
                                                            <div className="w-54 sm:mr-auto">
                                                                Phone Number:
                                                            </div>
                                                            8374922989
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Key className="mr-2.5 h-4 w-4 stroke-[1.3] text-slate-500" />
                                                        <div className="flex w-full flex-col flex-wrap gap-y-1 sm:flex-row sm:items-center">
                                                            <div className="w-54 sm:mr-auto">
                                                                Role:
                                                            </div>
                                                            <div className="mr-auto flex items-center rounded-md border border-success/10 bg-success/10 px-1.5 py-px text-xs font-medium text-success sm:mr-0">
                                                                <span className="-mt-px">
                                                                    Mechanic
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1.5">
                                                        <button
                                                            className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed w-full border-primary/20 text-primary/80 hover:bg-slate-50"
                                                            onClick={() => handleEditUser(menuId)}
                                                        >
                                                            <PenSquare className="mr-2 h-4 w-4 stroke-[1.3]" />
                                                            Edit User
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 flex flex-col gap-7 xl:col-span-7">
                                    <div className="box box--stacked flex flex-col p-5">
                                        <div className="relative mt-3 rounded-[0.6rem] border border-slate-200/80 dark:border-darkmode-400">
                                            <div className="absolute left-0 -mt-2 ml-4 bg-white px-3 text-xs uppercase text-slate-500">
                                                <div className="-mt-px">Product Details</div>
                                            </div>
                                            <div className="mt-2.5 flex flex-col gap-5 p-5">
                                                <div className="overflow-auto xl:overflow-visible">
                                                    <table className="w-full text-left border-b border-dashed border-slate-200/80">
                                                        <thead className="">
                                                            <tr className="">
                                                                <td className="dark:border-darkmode-300 border-b-0 px-0 py-0 [&_div]:first:rounded-l-md [&_div]:first:border-l [&_div]:last:rounded-r-md [&_div]:last:border-r">
                                                                    <div className="border-y border-slate-200/80 bg-slate-50 px-5 py-4 font-medium text-slate-500">Item
                                                                    </div>
                                                                </td>
                                                                <td className="dark:border-darkmode-300 border-b-0 px-0 py-0 [&_div]:first:rounded-l-md [&_div]:first:border-l [&_div]:last:rounded-r-md [&_div]:last:border-r">
                                                                    <div className="border-y border-slate-200/80 bg-slate-50 px-5 py-4 text-right font-medium text-slate-500">Quantity
                                                                    </div>
                                                                </td>
                                                                <td className="dark:border-darkmode-300 border-b-0 px-0 py-0 [&_div]:first:rounded-l-md [&_div]:first:border-l [&_div]:last:rounded-r-md [&_div]:last:border-r">
                                                                    <div className="border-y border-slate-200/80 bg-slate-50 px-5 py-4 text-right font-medium text-slate-500">Rate
                                                                    </div>
                                                                </td>
                                                                <td className="dark:border-darkmode-300 border-b-0 px-0 py-0 [&_div]:first:rounded-l-md [&_div]:first:border-l [&_div]:last:rounded-r-md [&_div]:last:border-r">
                                                                    <div className="border-y border-slate-200/80 bg-slate-50 px-5 py-4 text-right font-medium text-slate-500">Amount
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="[&_td]:first:pt-5 [&_td]:last:border-b-0 [&_td]:last:pb-5">
                                                                <td className="px-5 border-b dark:border-darkmode-300 border-dashed py-3.5 dark:bg-darkmode-600">
                                                                    <div className="flex items-center">
                                                                        <div className="image-fit zoom-in h-11 w-11">
                                                                            <img src="https://tailwise-html.vercel.app/dist/images/products/product6-400x400.jpg" alt="" className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" />
                                                                        </div>
                                                                        <div className="ml-5">
                                                                            <a className="whitespace-nowrap font-medium" href="">8-Cup Coffee Maker
                                                                            </a>
                                                                            <div className="mt-1 flex flex-col gap-0.5 whitespace-nowrap text-xs text-slate-500">Size
                                                                                : Men
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-right dark:bg-darkmode-600">
                                                                    <div className="whitespace-nowrap">5
                                                                    </div>
                                                                </td>
                                                                <td className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-right dark:bg-darkmode-600">
                                                                    <div className="whitespace-nowrap">$79
                                                                    </div>
                                                                </td>
                                                                <td className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 text-right dark:bg-darkmode-600">
                                                                    <div className="whitespace-nowrap font-medium">$119
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="mb-5 ml-auto mt-3 flex flex-col gap-3.5 pr-5 text-right">
                                                    <div className="flex items-center justify-end">
                                                        <div className="text-slate-500">Subtotal:</div>
                                                        <div className="w-20 font-medium text-slate-600 sm:w-48">$1.556
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-end">
                                                        <div className="text-slate-500">Total:</div>
                                                        <div className="w-20 font-medium text-slate-600 sm:w-48">$1.556
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-end">
                                                        <div className="text-slate-500">Tax:</div>
                                                        <div className="w-20 font-medium text-slate-600 sm:w-48">$47
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-end">
                                                        <div className="text-slate-500">Amount paid:</div>
                                                        <div className="w-20 font-medium text-slate-600 sm:w-48">$1.556
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-end">
                                                        <div className="text-slate-500">Due balance:</div>
                                                        <div className="w-20 font-medium text-slate-600 sm:w-48">$48
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default UserDetails
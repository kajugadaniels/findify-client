import React from 'react'
import { AppWindow, ExternalLink, Info, Key, UserCog2 } from 'lucide-react'

const Profile = () => {
    return (
        <div className="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[65px] pb-16 relative z-10 content--compact xl:ml-[275px] [&.content--compact]:xl:ml-[91px]">
            <div className="mt-14 px-5">
                <div className="container">
                    <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                        <div className="col-span-12">
                            <div className="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
                                <div className="text-base font-medium group-[.mode--light]:text-white">Settings
                                </div>
                                <div className="flex flex-col gap-x-3 gap-y-2 sm:flex-row md:ml-auto">
                                    <button data-tw-merge="" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary group-[.mode--light]:!border-transparent group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200">
                                        <ExternalLink className="mr-3 h-4 w-4 stroke-[1.3]" />
                                        Go to My Profile
                                    </button>
                                </div>
                            </div>
                            <div className="mt-3.5 grid grid-cols-12 gap-x-6 gap-y-10">
                                <div className="relative col-span-12 xl:col-span-3">
                                    <div className="sticky top-[104px]">
                                        <div className="box box--stacked flex flex-col px-5 pb-6 pt-5">
                                            <a href="#" className="flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary active">
                                                <AppWindow className="mr-3 h-4 w-4 stroke-[1.3]" />
                                                Profile InfoProfile Info
                                            </a>
                                            <a href="#" className="flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary active">
                                                <UserCog2 className="mr-3 h-4 w-4 stroke-[1.3]" />
                                                Profile Info
                                            </a>
                                            <a href="#" className="flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary active">
                                                <Key className="mr-3 h-4 w-4 stroke-[1.3]" />
                                                Change Password
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 flex flex-col gap-y-7 xl:col-span-9">
                                    <div className="box box--stacked flex flex-col p-1.5">
                                        <div className="relative h-60 w-full rounded-[0.6rem] bg-gradient-to-b from-theme-1/95 to-theme-2/95">
                                            <div className="w-full h-full relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-texture-white before:-mt-[50rem] after:content-[''] after:absolute after:inset-0 after:bg-texture-white after:-mt-[50rem]"></div>
                                            <div className="absolute inset-x-0 top-0 mx-auto mt-36 h-32 w-32">
                                                <div className="box image-fit h-full w-full overflow-hidden rounded-full border-[6px] border-white">
                                                    <img src="dist/images/users/user5-50x50.jpg" alt="Tailwise - Admin Dashboard Template" />
                                                </div>
                                                <div className="box absolute bottom-0 right-0 mb-2.5 mr-2.5 h-5 w-5 rounded-full border-2 border-white bg-success"></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-y-3 rounded-[0.6rem] bg-slate-50 p-5 pt-12 sm:flex-row sm:items-end">
                                            <div>
                                                <label data-tw-merge="" className="mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right flex items-center text-slate-500">
                                                    Who can see your profile photo?

                                                    <span data-placement="top" title="Low" className="tooltip cursor-pointer ml-1.5">
                                                        <Info className="h-3.5 w-3.5 stroke-[1.3] text-slate-500" />
                                                    </span>
                                                </label>
                                                <div className="relative mt-2.5">
                                                    <i data-tw-merge="" data-lucide="globe" className="absolute inset-y-0 left-0 z-10 my-auto ml-3 h-4 w-4 stroke-[1.3]" />
                                                    <select data-tw-merge="" className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 mr-3 rounded-[0.5rem] pl-9 sm:w-44">
                                                        <option value="custom-date">Anyone</option>
                                                        <option value="daily">Only you</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button data-tw-merge="" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed text-primary dark:border-primary [&:hover:not(:disabled)]:bg-primary/10 border-primary/50 sm:ml-auto">
                                                <i data-tw-merge="" data-lucide="image" className="mr-2.5 h-4 w-4 stroke-[1.3]" />
                                                Upload Cover
                                            </button>
                                        </div>
                                    </div>
                                    <div className="box box--stacked flex flex-col p-5">
                                        <div className="mb-6 border-b border-dashed border-slate-300/70 pb-5 text-[0.94rem] font-medium">Profile Info
                                        </div>
                                        <div>
                                            <div className="mt-5 block flex-col pt-5 first:mt-0 first:pt-0 sm:flex xl:flex-row xl:items-center">
                                                <div className="mb-2 inline-block sm:mb-0 sm:mr-5 sm:text-right xl:mr-14 xl:w-60">
                                                    <div className="text-left">
                                                        <div className="flex items-center">
                                                            <div className="font-medium">Full Name</div>
                                                            <div className="ml-2.5 rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-darkmode-300 dark:text-slate-400">Required
                                                            </div>
                                                        </div>
                                                        <div className="mt-1.5 text-xs leading-relaxed text-slate-500/80 xl:mt-3">Enter your full legal name as it appears on your
                                                            official identification.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-3 w-full flex-1 xl:mt-0">
                                                    <div className="flex flex-col items-center md:flex-row">
                                                        <input data-tw-merge="" type="text" placeholder="Brad" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 first:rounded-b-none last:-mt-px last:rounded-t-none focus:z-10 first:md:rounded-r-none first:md:rounded-bl-md last:md:-ml-px last:md:mt-0 last:md:rounded-l-none last:md:rounded-tr-md [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:rounded-none [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:md:mt-0" />
                                                        <input data-tw-merge="" type="text" placeholder="Pitt" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 first:rounded-b-none last:-mt-px last:rounded-t-none focus:z-10 first:md:rounded-r-none first:md:rounded-bl-md last:md:-ml-px last:md:mt-0 last:md:rounded-l-none last:md:rounded-tr-md [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:rounded-none [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:md:mt-0" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-5 block flex-col pt-5 first:mt-0 first:pt-0 sm:flex xl:flex-row xl:items-center">
                                                <div className="mb-2 inline-block sm:mb-0 sm:mr-5 sm:text-right xl:mr-14 xl:w-60">
                                                    <div className="text-left">
                                                        <div className="flex items-center">
                                                            <div className="font-medium">Date of Birth</div>
                                                            <div className="ml-2.5 rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-darkmode-300 dark:text-slate-400">Required
                                                            </div>
                                                        </div>
                                                        <div className="mt-1.5 text-xs leading-relaxed text-slate-500/80 xl:mt-3">This information is required to verify your age and
                                                            provide age-appropriate services.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-3 w-full flex-1 xl:mt-0">
                                                    <input data-tw-merge="" type="text" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 datepicker" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex border-t border-dashed border-slate-300/70 pt-5 md:justify-end">
                                            <button data-tw-merge="" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed text-primary dark:border-primary [&:hover:not(:disabled)]:bg-primary/10 w-full border-primary/50 px-4 md:w-auto">Save Changes</button>
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

export default Profile
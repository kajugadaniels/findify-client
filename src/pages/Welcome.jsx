import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo-icon-w.png'
import { FlagTriangleRight, FolderClock, FolderSync, Handshake, KeySquare, LogIn, ShieldCheck, PlayCircleIcon, Smartphone } from 'lucide-react'

const Welcome = () => {
    return (
        <div className="landing-page relative before:content-[''] before:w-screen before:h-screen before:fixed before:bg-slate-100 before:z-[-1]">
            <div className="background relative group overflow-x-hidden scroll-smooth before:content-[''] before:w-screen before:h-screen before:rounded-[0_0_50%] [&.background--hidden]:before:from-slate-100 [&.background--hidden]:before:to-transparent before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:absolute before:z-[-1] before:transition-colors before:ease-in-out before:duration-300 after:content-[''] after:z-[-1] after:h-screen after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-25rem] after:bg-no-repeat">
                <div className="container fixed inset-x-0 z-50 mx-auto">
                    <div className="relative flex items-center h-16 w-full mt-5 px-5 before:content-[''] before:inset-0 before:box before:absolute before:opacity-0 before:border-0 before:bg-gradient-to-r before:from-theme-1 before:to-theme-2 before:rounded-xl group-[.background--hidden]:before:opacity-100 after:content-[''] after:z-[-1] after:inset-x-4 after:shadow-sm after:opacity-0 after:h-full after:bg-primary/5 after:border after:border-primary/10 after:absolute after:rounded-lg after:mx-auto after:top-0 after:mt-3 after:dark:bg-darkmode-600/70 after:dark:border-darkmode-500/60 group-[.background--hidden]:after:opacity-100">
                        <a className="relative mr-14 flex items-center" href="">
                            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-white/10 bg-white/10 transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
                                <div className="relative h-[16px] w-[16px] [&_div]:bg-white">
                                    <img src={Logo} />
                                </div>
                            </div>
                            <div className="ml-3.5 text-lg font-medium text-white">
                                Findify
                            </div>
                        </a>
                        <div className="relative mx-auto flex items-center gap-10 text-white">
                            <Link className="cursor-pointer" to="/">
                                Welcome
                            </Link>
                            <Link className="cursor-pointer" to="/">
                                Who We Are
                            </Link>
                            <Link className="cursor-pointer" to="/">
                                How It Works
                            </Link>
                            <Link className="cursor-pointer" to="/">
                                What We Provide
                            </Link>
                            <Link className="cursor-pointer" to="/">
                                Contact Us
                            </Link>
                        </div>
                        <div className="relative flex gap-2.5">
                            <Link to='/login' className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed rounded-full border-white/10 bg-white/10 px-5 text-white">
                                <LogIn className="mr-2 stroke-[1] h-5 w-5" />
                                Sign In
                            </Link>
                            <Link to='/register' className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed rounded-full border-white/10 bg-white/10 px-5 text-white">
                                <KeySquare className="mr-2 stroke-[1] h-5 w-5" />
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container relative z-10 pt-40">
                    <div className="mb-40 flex flex-col items-center gap-56">
                        <div className="flex flex-col items-center">
                            <div className="text-center text-5xl font-medium leading-[1.2] text-white group-[.background--hidden]:text-slate-600">
                                <strong>Findify</strong> - Know Your Device, <br /> Secure Your Purchase
                            </div>
                            <div className="mt-4 text-center text-lg leading-[1.75] text-white/70 group-[.background--hidden]:text-slate-600/70">
                                Findify is a digital platform built to enhance transparency and security in the electronics marketplace. By recording devices with unique serial numbers, Findify empowers users to verify the legitimacy of electronic products before purchasing. From ownership history tracking to real-time stolen device reporting, Findify makes buying and selling electronics safer for everyone.
                            </div>
                            <Link to="/">
                                <button className="transition duration-200 border shadow-sm inline-flex items-center justify-center font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed rounded-full zoom-in mt-8 border-white/10 bg-white/10 px-7 py-3 text-[0.94rem] text-white group-[.background--hidden]:border-primary group-[.background--hidden]:bg-primary">
                                    <PlayCircleIcon className="mr-2 stroke-[1] h-5 w-5" />
                                    View Demo
                                </button>
                            </Link>
                        </div>
                        <div className="flex w-full flex-col items-center">
                            <div className="text-3xl font-medium relative">
                                <div className="z-5 relative text-center text-white">
                                    Our Services
                                </div>
                            </div>
                            <div className="z-5 relative mt-4 text-center text-white text-slate-500/80">
                            Findify offers simple tools to verify devices, track ownership, and report stolen <br /> electronics — helping you buy, sell, and protect with confidence.
                            </div>
                            <div className="-mx-2.5 mt-10 px-20">
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-8">
                                        <div className="box box--stacked flex flex-col items-center p-5">
                                            <div className="h-12 w-12">
                                                <Smartphone className="stroke-[1.3] h-10 w-10" />
                                            </div>
                                            <div className="mt-4 text-base font-medium">
                                                Device Legitimacy Check
                                            </div>
                                            <div className="mt-2 pb-2 text-center leading-relaxed text-slate-500">
                                                Enter a device's serial number to check if it’s reported stolen or lost, helping you avoid buying illegal or suspicious electronics.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-8">
                                        <div className="box box--stacked flex flex-col items-center p-5">
                                            <div className="h-12 w-12">
                                                <FolderClock className="stroke-[1.3] h-10 w-10" />
                                            </div>
                                            <div className="mt-4 text-base font-medium">
                                                Ownership History Tracking
                                            </div>
                                            <div className="mt-2 pb-2 text-center leading-relaxed text-slate-500">
                                                See the full history of who owned a device before you, making it easier to trust the source and confirm its authenticity.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-8">
                                        <div className="box box--stacked flex flex-col items-center p-5">
                                            <div className="h-12 w-12">
                                                <FlagTriangleRight className="stroke-[1.3] h-10 w-10" />
                                            </div>
                                            <div className="mt-4 text-base font-medium">
                                                Stolen Device Reporting
                                            </div>
                                            <div className="mt-2 pb-2 text-center leading-relaxed text-slate-500">
                                                Report your lost or stolen device to alert others and prevent it from being sold or reused by unauthorized people.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-8">
                                        <div className="box box--stacked flex flex-col items-center p-5">
                                            <div className="h-12 w-12">
                                                <FolderSync className="stroke-[1.3] h-10 w-10" />
                                            </div>
                                            <div className="mt-4 text-base font-medium">
                                                Ownership Transfer System
                                            </div>
                                            <div className="mt-2 pb-2 text-center leading-relaxed text-slate-500">
                                                Officially transfer ownership of your device to someone else, creating a secure and verified record of the transaction.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-8">
                                        <div className="box box--stacked flex flex-col items-center p-5">
                                            <div className="h-12 w-12">
                                                <Handshake className="stroke-[1.3] h-10 w-10" />
                                            </div>
                                            <div className="mt-4 text-base font-medium">
                                                Recovery Assistance
                                            </div>
                                            <div className="mt-2 pb-2 text-center leading-relaxed text-slate-500">
                                                When you report a stolen device, we help track it and notify others to avoid purchases, increasing your chances of recovery.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-8">
                                        <div className="box box--stacked flex flex-col items-center p-5">
                                            <div className="h-12 w-12">
                                                <ShieldCheck className="stroke-[1.3] h-10 w-10" />
                                            </div>
                                            <div className="mt-4 text-base font-medium">
                                                Seller Verification
                                            </div>
                                            <div className="mt-2 pb-2 text-center leading-relaxed text-slate-500">
                                                Check a seller’s history and their listed devices to make sure you're dealing with a trusted and verified <br /> source.
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

export default Welcome
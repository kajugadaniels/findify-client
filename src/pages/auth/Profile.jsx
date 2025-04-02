import React, { useState, useEffect } from 'react';
import { AppWindow, UserCog2, Key, ExternalLink } from 'lucide-react';
import { verifyToken } from '../../api';
import { toast } from 'react-toastify';
import { ChangePasswordForm, CustomerProfileForm, UpdateUserProfileForm, VendorProfileForm } from '../../components';

const Profile = () => {
    const [activeTab, setActiveTab] = useState("basic");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await verifyToken();
                if (response && response.user) {
                    setUser(response.user);
                }
            } catch (error) {
                toast.error("Failed to fetch user data");
            }
        };
        fetchUser();
    }, []);

    const renderExtendedInfoForm = () => {
        if (!user) return null;
        if (user.role === "Personal") {
            return (
                <CustomerProfileForm
                    userId={user.id}
                    extendedProfile={user.extended_profile || {}}
                />
            );
        } else if (user.role === "Vendor" || user.role === "Wholesaler") {
            return (
                <VendorProfileForm
                    userId={user.id}
                    extendedProfile={user.extended_profile || {}}
                />
            );
        } else {
            return <div>No extended profile available for your role.</div>;
        }
    };

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
                                            <button
                                                onClick={() => setActiveTab("basic")}
                                                className={`flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary ${activeTab === "basic" ? "active" : "text-dark"}`}
                                            >
                                                <AppWindow className="mr-3 h-4 w-4 stroke-[1.3]" />
                                                Profile Info
                                            </button>
                                            <button
                                                onClick={() => setActiveTab("extended")}
                                                className={`flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary ${activeTab === "extended" ? "active" : "text-dark"}`}
                                            >
                                                <UserCog2 className="mr-3 h-4 w-4 stroke-[1.3]" />
                                                Profile Info
                                            </button>
                                            <button
                                                onClick={() => setActiveTab("password")}
                                                className={`flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary ${activeTab === "password" ? "active" : "text-dark"}`}
                                            >
                                                <Key className="mr-3 h-4 w-4 stroke-[1.3]" />
                                                Change Password
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <>
                                    {activeTab === "basic" && <UpdateUserProfileForm user={user} />}
                                    {activeTab === "extended" && renderExtendedInfoForm()}
                                    {activeTab === "password" && <ChangePasswordForm />}
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
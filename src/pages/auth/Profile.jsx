import React, { useState, useEffect } from 'react';
import { AppWindow, UserCog2, Key } from 'lucide-react';
import { verifyToken } from '../../api';
import { toast } from 'react-toastify';
import { ChangePasswordForm, CustomerProfileForm, UpdateUserProfileForm, VendorProfileForm } from '../../components'

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
            return <CustomerProfileForm userId={user.id} />;
        } else if (user.role === "Vendor" || user.role === "Wholesaler") {
            return <VendorProfileForm userId={user.id} />;
        } else {
            return <div>No extended profile available for your role.</div>;
        }
    };

    return (
        <div className="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[65px] pb-16 relative z-10 content--compact xl:ml-[275px] [&.content--compact]:xl:ml-[91px]">
            <div className="mt-14 px-5">
                <h1 className="text-2xl font-bold mb-5">Profile Settings</h1>
                <div className="flex border-b border-gray-200 mb-6">
                    <button
                        onClick={() => setActiveTab("basic")}
                        className={`px-4 py-2 mr-4 focus:outline-none ${activeTab === "basic" ? "border-b-2 border-primary font-semibold" : "text-gray-500"
                            }`}
                    >
                        <AppWindow className="inline mr-1 h-4 w-4" /> Basic Info
                    </button>
                    <button
                        onClick={() => setActiveTab("extended")}
                        className={`px-4 py-2 mr-4 focus:outline-none ${activeTab === "extended" ? "border-b-2 border-primary font-semibold" : "text-gray-500"
                            }`}
                    >
                        <UserCog2 className="inline mr-1 h-4 w-4" /> Extended Info
                    </button>
                    <button
                        onClick={() => setActiveTab("password")}
                        className={`px-4 py-2 focus:outline-none ${activeTab === "password" ? "border-b-2 border-primary font-semibold" : "text-gray-500"
                            }`}
                    >
                        <Key className="inline mr-1 h-4 w-4" /> Change Password
                    </button>
                </div>
                <div>
                    {activeTab === "basic" && <UpdateUserProfileForm user={user} />}
                    {activeTab === "extended" && renderExtendedInfoForm()}
                    {activeTab === "password" && <ChangePasswordForm />}
                </div>
            </div>
        </div>
    );
};

export default Profile;

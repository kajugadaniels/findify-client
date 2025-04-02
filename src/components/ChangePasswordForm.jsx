import React, { useState } from 'react';
import { updatePassword } from '../api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { UploadIcon } from 'lucide-react';

const ChangePasswordForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        old_password: '',
        new_password: '',
        confirm_new_password: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.new_password !== formData.confirm_new_password) {
            toast.error("New password and confirmation do not match");
            return;
        }
        setLoading(true);
        try {
            // Attach refresh token from localStorage if available.
            const refreshToken = localStorage.getItem('refresh');
            const payload = { 
                old_password: formData.old_password, 
                new_password: formData.new_password, 
                confirm_new_password: formData.confirm_new_password,
                refresh_token: refreshToken 
            };
            await updatePassword(payload);
            toast.success("Password updated successfully. You have been logged out.");
            // Clear tokens and user info, then redirect to login.
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            localStorage.removeItem('user');
            navigate('/login');
        } catch (error) {
            toast.error("Failed to update password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="col-span-12 flex flex-col gap-y-7 xl:col-span-9" onSubmit={handleSubmit}>
            <div className="box box--stacked flex flex-col p-5">
                <div className="mb-6 border-b border-dashed border-slate-300/70 pb-5 text-[0.94rem] font-medium">
                    Change Password
                </div>
                <div>
                    <div className="mt-5 block flex-col pt-5 first:mt-0 first:pt-0 sm:flex xl:flex-row xl:items-center">
                        <div className="mb-2 inline-block sm:mb-0 sm:mr-5 sm:text-right xl:mr-14 xl:w-60">
                            <div className="text-left">
                                <div className="flex items-center">
                                    <div className="font-medium">
                                        Old Password
                                    </div>
                                    <div className="ml-2.5 rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-darkmode-300 dark:text-slate-400">
                                        Required
                                    </div>
                                </div>
                                <div className="mt-1.5 text-xs leading-relaxed text-slate-500/80 xl:mt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 w-full flex-1 xl:mt-0">
                            <div className="flex flex-col items-center md:flex-row">
                                <input
                                    type="password" 
                                    name="old_password" 
                                    value={formData.old_password} 
                                    onChange={handleChange} 
                                    placeholder="Enter Old Password"
                                    className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 first:rounded-b-none last:-mt-px last:rounded-t-none focus:z-10 first:md:rounded-r-none first:md:rounded-bl-md last:md:-ml-px last:md:mt-0 last:md:rounded-l-none last:md:rounded-tr-md [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:rounded-none [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:md:mt-0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 block flex-col pt-5 first:mt-0 first:pt-0 sm:flex xl:flex-row xl:items-center">
                        <div className="mb-2 inline-block sm:mb-0 sm:mr-5 sm:text-right xl:mr-14 xl:w-60">
                            <div className="text-left">
                                <div className="flex items-center">
                                    <div className="font-medium">
                                        New Password
                                    </div>
                                    <div className="ml-2.5 rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-darkmode-300 dark:text-slate-400">
                                        Required
                                    </div>
                                </div>
                                <div className="mt-1.5 text-xs leading-relaxed text-slate-500/80 xl:mt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 w-full flex-1 xl:mt-0">
                            <div className="flex flex-col items-center md:flex-row">
                                <input
                                    type="password" 
                                    name="new_password" 
                                    value={formData.new_password} 
                                    onChange={handleChange}  
                                    placeholder="Enter New Password"
                                    className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 first:rounded-b-none last:-mt-px last:rounded-t-none focus:z-10 first:md:rounded-r-none first:md:rounded-bl-md last:md:-ml-px last:md:mt-0 last:md:rounded-l-none last:md:rounded-tr-md [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:rounded-none [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:md:mt-0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 block flex-col pt-5 first:mt-0 first:pt-0 sm:flex xl:flex-row xl:items-center">
                        <div className="mb-2 inline-block sm:mb-0 sm:mr-5 sm:text-right xl:mr-14 xl:w-60">
                            <div className="text-left">
                                <div className="flex items-center">
                                    <div className="font-medium">
                                        Confirm New Password
                                    </div>
                                    <div className="ml-2.5 rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-darkmode-300 dark:text-slate-400">
                                        Required
                                    </div>
                                </div>
                                <div className="mt-1.5 text-xs leading-relaxed text-slate-500/80 xl:mt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 w-full flex-1 xl:mt-0">
                            <div className="flex flex-col items-center md:flex-row">
                                <input
                                    type="password" 
                                    name="confirm_new_password" 
                                    value={formData.confirm_new_password} 
                                    onChange={handleChange} 
                                    placeholder="Confirm New Password"
                                    className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 first:rounded-b-none last:-mt-px last:rounded-t-none focus:z-10 first:md:rounded-r-none first:md:rounded-bl-md last:md:-ml-px last:md:mt-0 last:md:rounded-l-none last:md:rounded-tr-md [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:rounded-none [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:md:mt-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex border-t border-dashed border-slate-300/70 pt-5 md:justify-end">
                    <button
                        type='submit'
                        className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed text-primary dark:border-primary [&:hover:not(:disabled)]:bg-primary/10 w-full border-primary/50 px-4 md:w-auto"
                    >
                        <UploadIcon className="-ml-2 mr-2 h-5 w-5 stroke-[1.3]" />
                        {loading ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ChangePasswordForm;

import React, { useState, useEffect } from 'react';
import { updateUserProfile } from '../api';
import { Info, Image, Globe, User, Pencil, UploadIcon } from 'lucide-react';
import { toast } from 'react-toastify';

const UpdateUserProfileForm = ({ user }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        image: null,
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                phone_number: user.phone_number || '',
                image: user.image || null,
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image" && files.length > 0) {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Prepare form data for file upload if needed.
            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("phone_number", formData.phone_number);
            if (formData.image) {
                data.append("image", formData.image);
            }
            await updateUserProfile(data);
            toast.success("Profile updated successfully.");
        } catch (error) {
            toast.error("Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="col-span-12 flex flex-col gap-y-7 xl:col-span-9" onSubmit={handleSubmit}>
            <div className="box box--stacked flex flex-col p-1.5">
                <div className="relative h-60 w-full rounded-[0.6rem] bg-gradient-to-b from-theme-1/95 to-theme-2/95">
                    <div className="w-full h-full relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-texture-white before:-mt-[50rem] after:content-[''] after:absolute after:inset-0 after:bg-texture-white after:-mt-[50rem]"></div>
                    <div className="absolute inset-x-0 top-0 mx-auto mt-36 h-32 w-32">
                        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/10 bg-primary/5">
                            <User className="-mt-1.5 h-[65%] w-[65%] fill-slate-300/70 stroke-slate-400/50 stroke-[0.5]" />
                            <span className="box absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full">
                                <Pencil className="h-3.5 w-3.5 stroke-[1.3] text-slate-500" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 rounded-[0.6rem] bg-slate-50 p-5 pt-12 sm:flex-row sm:items-end">
                    <button data-tw-merge="" className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed text-primary dark:border-primary [&:hover:not(:disabled)]:bg-primary/10 border-primary/50 sm:ml-auto">
                        <Image className="mr-2.5 h-4 w-4 stroke-[1.3]" />
                        Upload Cover
                    </button>
                </div>
            </div>
            <div className="box box--stacked flex flex-col p-5">
                <div className="mb-6 border-b border-dashed border-slate-300/70 pb-5 text-[0.94rem] font-medium">
                    Profile Info
                </div>
                <div>
                    <div className="mt-5 block flex-col pt-5 first:mt-0 first:pt-0 sm:flex xl:flex-row xl:items-center">
                        <div className="mb-2 inline-block sm:mb-0 sm:mr-5 sm:text-right xl:mr-14 xl:w-60">
                            <div className="text-left">
                                <div className="flex items-center">
                                    <div className="font-medium">
                                        Full Name & Email
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
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Full Name"
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
                                        Phone Number & Email Address
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
                                    type="number"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    required
                                    className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 datepicker"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email"
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

export default UpdateUserProfileForm;

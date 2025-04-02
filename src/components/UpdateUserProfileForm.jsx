import React, { useState, useEffect } from 'react';
import { updateUserProfile } from '../api';
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
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Profile Image</label>
                <input type="file" name="image" onChange={handleChange} className="mt-1 block w-full" />
            </div>
            <button type="submit" disabled={loading} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
                {loading ? "Updating..." : "Update Profile"}
            </button>
        </form>
    );
};

export default UpdateUserProfileForm;

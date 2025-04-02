import React, { useState } from 'react';
import { updatePassword } from '../api';
import { toast } from 'react-toastify';

const ChangePasswordForm = () => {
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
            // Attach refresh token automatically from localStorage if available.
            const refreshToken = localStorage.getItem('refresh');
            const payload = { 
                old_password: formData.old_password, 
                new_password: formData.new_password, 
                confirm_new_password: formData.confirm_new_password,
                refresh_token: refreshToken 
            };
            await updatePassword(payload);
            toast.success("Password updated successfully. Please log in again.");
        } catch (error) {
            toast.error("Failed to update password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
                <label className="block text-sm font-medium text-gray-700">Old Password</label>
                <input 
                    type="password" 
                    name="old_password" 
                    value={formData.old_password} 
                    onChange={handleChange} 
                    className="mt-1 block w-full border rounded-md p-2" 
                    required 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input 
                    type="password" 
                    name="new_password" 
                    value={formData.new_password} 
                    onChange={handleChange} 
                    className="mt-1 block w-full border rounded-md p-2" 
                    required 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input 
                    type="password" 
                    name="confirm_new_password" 
                    value={formData.confirm_new_password} 
                    onChange={handleChange} 
                    className="mt-1 block w-full border rounded-md p-2" 
                    required 
                />
            </div>
            <button type="submit" disabled={loading} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
                {loading ? "Updating..." : "Change Password"}
            </button>
        </form>
    );
};

export default ChangePasswordForm;

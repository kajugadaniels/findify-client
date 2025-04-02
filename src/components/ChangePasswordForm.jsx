import React, { useState } from 'react';
import { updateUserProfile } from '../api';
import { toast } from 'react-toastify';

const ChangePasswordForm = () => {
    const [formData, setFormData] = useState({
        password: '',
        confirm_password: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirm_password) {
            toast.error("Passwords do not match");
            return;
        }
        setLoading(true);
        try {
            // We call updateUserProfile with the new password.
            await updateUserProfile({ password: formData.password });
            toast.success("Password updated successfully.");
        } catch (error) {
            toast.error("Failed to update password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <button type="submit" disabled={loading} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
                {loading ? "Updating..." : "Change Password"}
            </button>
        </form>
    );
};

export default ChangePasswordForm;

import React, { useState, useEffect } from 'react';
import { updatePersonalProfile } from '../api';
import { toast } from 'react-toastify';

const CustomerProfileForm = ({ userId, extendedProfile }) => {
    // Initialize state using extendedProfile data if available.
    const [formData, setFormData] = useState({
        id_number: extendedProfile.id_number || '',
        bio: extendedProfile.bio || '',
        country: extendedProfile.country || '',
        district: extendedProfile.district || '',
        sector: extendedProfile.sector || '',
        cell: extendedProfile.cell || '',
        village: extendedProfile.village || '',
        date_of_birth: extendedProfile.date_of_birth || '',
        gender: extendedProfile.gender || '',
    });
    const [loading, setLoading] = useState(false);

    // If extendedProfile changes, update state accordingly.
    useEffect(() => {
        if (extendedProfile) {
            setFormData({
                id_number: extendedProfile.id_number || '',
                bio: extendedProfile.bio || '',
                country: extendedProfile.country || '',
                district: extendedProfile.district || '',
                sector: extendedProfile.sector || '',
                cell: extendedProfile.cell || '',
                village: extendedProfile.village || '',
                date_of_birth: extendedProfile.date_of_birth || '',
                gender: extendedProfile.gender || '',
            });
        }
    }, [extendedProfile]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updatePersonalProfile(userId, formData);
            toast.success("Personal profile updated successfully.");
        } catch (error) {
            toast.error("Failed to update personal profile.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
                <label className="block text-sm font-medium text-gray-700">ID Number</label>
                <input type="text" name="id_number" value={formData.id_number} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea name="bio" value={formData.bio} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2"></textarea>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">District</label>
                <input type="text" name="district" value={formData.district} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Sector</label>
                <input type="text" name="sector" value={formData.sector} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Cell</label>
                <input type="text" name="cell" value={formData.cell} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Village</label>
                <input type="text" name="village" value={formData.village} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <button type="submit" disabled={loading} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
                {loading ? "Updating..." : "Update Personal Profile"}
            </button>
        </form>
    );
};

export default CustomerProfileForm;

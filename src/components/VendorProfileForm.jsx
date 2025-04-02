import React, { useState, useEffect } from 'react';
import { updateVendorProfile } from '../api';
import { toast } from 'react-toastify';

const VendorProfileForm = ({ userId, extendedProfile }) => {
    // Pre-populate state with extendedProfile data if available.
    const [formData, setFormData] = useState({
        company_name: extendedProfile.company_name || '',
        tin_number: extendedProfile.tin_number || '',
        business_type: extendedProfile.business_type || '',
        email: extendedProfile.email || '',
        phone: extendedProfile.phone || '',
        website: extendedProfile.website || '',
        address: extendedProfile.address || '',
        country: extendedProfile.country || '',
        district: extendedProfile.district || '',
        sector: extendedProfile.sector || '',
        cell: extendedProfile.cell || '',
        village: extendedProfile.village || '',
    });
    const [loading, setLoading] = useState(false);

    // If extendedProfile changes, update the formData.
    useEffect(() => {
        if (extendedProfile) {
            setFormData({
                company_name: extendedProfile.company_name || '',
                tin_number: extendedProfile.tin_number || '',
                business_type: extendedProfile.business_type || '',
                email: extendedProfile.email || '',
                phone: extendedProfile.phone || '',
                website: extendedProfile.website || '',
                address: extendedProfile.address || '',
                country: extendedProfile.country || '',
                district: extendedProfile.district || '',
                sector: extendedProfile.sector || '',
                cell: extendedProfile.cell || '',
                village: extendedProfile.village || '',
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
            await updateVendorProfile(userId, formData);
            toast.success("Vendor profile updated successfully.");
        } catch (error) {
            toast.error("Failed to update vendor profile.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">TIN Number</label>
                <input type="text" name="tin_number" value={formData.tin_number} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Business Type</label>
                <select name="business_type" value={formData.business_type} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required>
                    <option value="">Select Business Type</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Wholesaler">Wholesaler</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Manufacturer">Manufacturer</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Website</label>
                <input type="url" name="website" value={formData.website} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea name="address" value={formData.address} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" required></textarea>
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
            <button type="submit" disabled={loading} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
                {loading ? "Updating..." : "Update Vendor Profile"}
            </button>
        </form>
    );
};

export default VendorProfileForm;

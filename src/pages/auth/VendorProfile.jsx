import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateVendorProfile, verifyToken } from '../../api';
import { toast } from 'react-toastify';

const VendorProfile = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        company_name: '',
        tin_number: '',
        business_type: '',
        email: '',
        phone: '',
        website: '',
        address: '',
        country: '',
        district: '',
        sector: '',
        cell: '',
        village: ''
    });
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await verifyToken();
                if (response && response.user) {
                    setUserId(response.user.id);
                }
            } catch (error) {
                toast.error('Failed to fetch user information.');
            }
        };
        fetchUser();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userId) {
            toast.error("User ID is missing");
            return;
        }
        setLoading(true);
        try {
            await updateVendorProfile(userId, formData);
            toast.success("Vendor profile updated successfully");
            navigate('/dashboard');
        } catch (error) {
            toast.error("Failed to update vendor profile");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-2xl font-bold mb-5">Complete Your Vendor Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1">Company Name</label>
                    <input 
                        type="text"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">TIN Number</label>
                    <input 
                        type="text"
                        name="tin_number"
                        value={formData.tin_number}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Business Type</label>
                    <select 
                        name="business_type"
                        value={formData.business_type}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    >
                        <option value="">Select Business Type</option>
                        <option value="Retailer">Retailer</option>
                        <option value="Wholesaler">Wholesaler</option>
                        <option value="Distributor">Distributor</option>
                        <option value="Manufacturer">Manufacturer</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Phone</label>
                    <input 
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Website</label>
                    <input 
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Address</label>
                    <textarea 
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Country</label>
                    <input 
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">District</label>
                    <input 
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Sector</label>
                    <input 
                        type="text"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Cell</label>
                    <input 
                        type="text"
                        name="cell"
                        value={formData.cell}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Village</label>
                    <input 
                        type="text"
                        name="village"
                        value={formData.village}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-primary text-white rounded-full py-3 font-medium">
                    {loading ? 'Updating...' : 'Update Profile'}
                </button>
            </form>
        </div>
    );
};

export default VendorProfile;

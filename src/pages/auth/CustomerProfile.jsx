import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updatePersonalProfile, verifyToken } from '../../api';
import { toast } from 'react-toastify';

const CustomerProfile = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id_number: '',
        bio: '',
        country: '',
        district: '',
        sector: '',
        cell: '',
        village: '',
        date_of_birth: '',
        gender: ''
    });
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Fetch user data via verifyToken to obtain the user id.
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
            await updatePersonalProfile(userId, formData);
            toast.success("Personal profile updated successfully");
            navigate('/dashboard');
        } catch (error) {
            toast.error("Failed to update personal profile");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[65px] pb-16 relative z-10 content--compact xl:ml-[275px] [&.content--compact]:xl:ml-[91px]">
            <div className="mt-14 px-5">
                <div className="container mx-auto py-10">
                    <h2 className="text-2xl font-bold mb-5">Complete Your Personal Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1">ID Number</label>
                            <input
                                type="text"
                                name="id_number"
                                value={formData.id_number}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Bio</label>
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
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
                        <div className="mb-4">
                            <label className="block mb-1">Date of Birth</label>
                            <input
                                type="date"
                                name="date_of_birth"
                                value={formData.date_of_birth}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <button type="submit" disabled={loading} className="w-full bg-primary text-white rounded-full py-3 font-medium">
                            {loading ? 'Updating...' : 'Update Profile'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerProfile;

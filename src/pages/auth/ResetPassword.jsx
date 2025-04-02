import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { passwordResetConfirm } from '../../api';
import Logo from '../../assets/img/logo-icon-w.png';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem('passwordResetEmail');
        if (storedEmail) {
            setEmail(storedEmail);
        } else {
            toast.error("Not allowed to visit this page.");
            navigate('/forget-password');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }
        setLoading(true);
        try {
            const payload = {
                email,
                otp,
                new_password: newPassword,
                confirm_new_password: confirmPassword,
            };
            await passwordResetConfirm(payload);
            toast.success("Password reset successfully.");
            localStorage.removeItem('passwordResetEmail');
            navigate('/login');
        } catch (error) {
            toast.error("Failed to reset password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container grid grid-cols-12 px-5 py-10 sm:px-10 sm:py-14 md:px-36 lg:h-screen lg:max-w-[1550px] lg:py-0 lg:pl-14 lg:pr-12 xl:px-24 2xl:max-w-[1750px]">
            <div className="relative z-50 h-full col-span-12 p-7 sm:p-14 bg-white rounded-2xl lg:bg-transparent lg:pr-10 lg:col-span-5 xl:pr-24 2xl:col-span-4 lg:p-0 before:content-[''] before:absolute before:inset-0 before:-mb-3.5 before:bg-white/40 before:rounded-2xl before:mx-5">
                <div className="relative z-10 flex flex-col justify-center w-full h-full py-2 lg:py-32">
                    <div className="flex h-[55px] w-[55px] items-center justify-center rounded-[0.8rem] border border-primary/30 mb-5">
                        <div className="relative flex h-[50px] w-[50px] items-center justify-center rounded-[0.6rem] bg-white bg-gradient-to-b from-theme-1/90 to-theme-2/90">
                            <div className="relative h-[26px] w-[26px] -rotate-90">
                                <img src={Logo} alt="Logo" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-medium">Reset Password</div>
                        <div className="mt-2.5 text-slate-600">
                            Enter the OTP sent to your email and set a new password.
                        </div>
                        <form onSubmit={handleSubmit} className="mt-6">
                            <label className="inline-block mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                readOnly
                                className="w-full border rounded px-4 py-3 mb-5"
                            />
                            <label className="inline-block mb-2">OTP</label>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                                className="w-full border rounded px-4 py-3 mb-5"
                            />
                            <label className="inline-block mb-2">New Password</label>
                            <input
                                type="password"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                className="w-full border rounded px-4 py-3 mb-5"
                            />
                            <label className="inline-block mb-2">Confirm New Password</label>
                            <input
                                type="password"
                                placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full border rounded px-4 py-3 mb-5"
                            />
                            <button type="submit" disabled={loading} className="w-full bg-primary text-white rounded-full py-3">
                                {loading ? "Resetting..." : "Reset Password"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;

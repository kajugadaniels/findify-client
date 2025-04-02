import axios from 'axios';

const baseURL =
    import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_API_BASE_URL_PROD
        : import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
    baseURL,
});

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized access. Please log in again.');
            // Clear stored tokens and user data
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('refresh');
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
);

export const loginUser = async (identifier, password) => {
    try {
        const response = await apiClient.post('/auth/login/', { identifier, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (registerData) => {
    try {
        const response = await apiClient.post('/auth/register/', registerData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        const refreshToken = localStorage.getItem('refresh');
        const response = await apiClient.post('/auth/logout/', { refresh: refreshToken });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateUserProfile = async (updateData) => {
    try {
        const response = await apiClient.patch('/auth/profile-update/', updateData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const verifyToken = async () => {
    try {
        const response = await apiClient.get('/auth/verify_token/');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const passwordResetRequest = async (email) => {
    try {
        const response = await apiClient.post('/auth/password-reset-request/', { email });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const passwordResetConfirm = async (data) => {
    try {
        const response = await apiClient.post('/auth/password-reset-confirm/', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
const axios = require('axios');
const Cookies = require('js-cookie')
const apiUrl = process.env.NEXT_PUBLIC_API_URL;


const getToken = () => {
    return Cookies.get('token') || Cookies.get('token') || null;
}

axios.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

const handleRequest = async (requestPromise) => {
    try {
        const response = await requestPromise;
        // console.log(response);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error;
            if (axiosError.response) {
                const errorResponse = axiosError.response.data;
                if (errorResponse && errorResponse.message) {
                    throw new Error(`${errorResponse.message}`);
                } else {
                    throw new Error(`Request failed with status ${axiosError.response.status}`);
                }
            } else if (axiosError.request) {
                throw new Error('Request made, but no response received.');
            } else {
                throw new Error(`Error setting up the request: ${axiosError.message}`);
            }
        } else {
            throw new Error(`Non-Axios error: ${error.message}`);
        }
    }
};

const apiService = {
    get: async (endpoint, config = {}) => {
        console.log(`Going to ${apiUrl}/${endpoint}`)
        return handleRequest(axios.get(`${apiUrl}/${endpoint}`, config));
    },

    post: async (endpoint, data, config = {}) => {
        return handleRequest(axios.post(`${apiUrl}/${endpoint}`, data, config));
    },

    put: async (endpoint, data, config = {}) => {
        return handleRequest(axios.put(`${apiUrl}/${endpoint}`, data, config));
    },

    delete: async (endpoint, config) => {
        return handleRequest(axios.delete(`${apiUrl}/${endpoint}`, config));
    }
};

module.exports = apiService;

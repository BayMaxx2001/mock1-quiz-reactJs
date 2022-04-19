import axios from "axios";


export const userAuthLogin = async (user) => {
    try {
        const res = await axios.post(`/v1/auth/login`, user)
        return {
            success: true,
            data: res.data
        };
    } catch (error) {
        return {
            success: false,
            data: error.response.data.message
        }
    }
}

export const userAuthRegister = async (user) => {
    try {
        const res = await axios.post(`/v1/auth/register`, user)
        return {
            success: true,
            data: res.data
        };
    } catch (error) {
        return {
            success: false,
            data: error.response.data.message
        }
    }
}

export const userAuthLogout = async (refreshToken) => {
    try {
        const reToken = { refreshToken: refreshToken }
        const res = await axios.post(`/v1/auth/logout`, reToken)
        return {
            success: true,
            data: res.data
        };
    } catch (error) {
        return {
            success: false,
            data: error.response.data.message
        }
    }
}

export const refreshTokenAPI = async (refreshToken) => {
    try {
        const res = await axios.create().post(`/v1/auth/refresh-tokens`, { refreshToken: refreshToken })
        return {
            success: true,
            data: res.data
        };
    } catch (error) {
        return {
            success: false,
            data: error.response.data.message
        }
    }
}
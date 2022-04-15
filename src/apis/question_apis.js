import axios from "axios";

export const getQuestionUsers = async (limit) => {
    try {
        const res = await axios.get(`/v1/questions?limit=${limit}`)
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

export const submitAnswers = async (listAns) => {
    try {
        const res = await axios.post(`/v1/questions/submit`, listAns)
        return {
            success: true,
            data: res.data
        };
    } catch (error) {
        console.error(error.response.data.message);
        return {
            success: false,
            data: error.response.data.message
        }
    }
}
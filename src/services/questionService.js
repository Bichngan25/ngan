import axiosInstance from "../utils/axiosInstance"

export const questionService = {
    getQuestion (query = ""){
        return axiosInstance.get(`/questions ${query}`)
    }
}
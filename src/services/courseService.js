import axiosInstance from "../utils/axiosInstance"

export const courseService = {
    getCourses (query = ""){
        return axiosInstance.get(`/courses${query}`)
    },
    getCourseBySlug(slug = ""){
        return axiosInstance.get(`/courses/${slug}`)
    }
}
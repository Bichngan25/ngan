import axiosInstance from "../utils/axiosInstance"

export const galleryService = {
    getGalleries (query = ""){
        return axiosInstance.get(`/galleries${query}`)
    }
}
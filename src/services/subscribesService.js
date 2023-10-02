import axiosInstance from "../utils/axiosInstance"

export const subscribesService = {
    subscribes(payload = {}) {
      return axiosInstance.post(`/subscribes`, payload);
    },
}

import axiosInstance from "../utils/axiosInstance";
import tokenMethod from "../utils/token";

// b1:  dau tien dung axiosInstance.post sau co check trong swagger phan login
// b2: tao payload va sau do truyen payload vao return
// ===== nho xem phuong thuc ======

export const authService = {
  login(payload = {}) {
    return axiosInstance.post(`/customer/login`, payload);
  },
  register(payload = {}) {
    return axiosInstance.post(`/customer/register`, payload);
  },
  getProfile() {
    return axiosInstance.get(`/customer/profiles`, {
      // ========> interceptors.request
      // headers: {
      //   // confit sẽ nhắm vào header và sẽ confit Authorization => thêm Bearer ${tokenMethod.get()?.accessToken}
      //   Authorization: `Bearer ${tokenMethod.get()?.accessToken}`,
      // },
    });
  },
  updateProfile(payload = {}) {
    return axiosInstance.put(`/customer/profiles`, payload, {
      headers: {
        // nho de y multipart or application
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
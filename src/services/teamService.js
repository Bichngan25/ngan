import axiosInstance from "../utils/axiosInstance"

export const teamService ={
    getTeams (query = ""){
        return axiosInstance.get (`/teams ${query}`)
    }
}
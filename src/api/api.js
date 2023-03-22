import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "38187832-a5c3-46c6-924f-7067da4bf899"
    }

})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(profileId) {
        return instance.get(`profile/${profileId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(profileId) {
        return instance.get(`profile/status/${profileId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
            .then(response => {
                return response.data
            })
    },
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data.data
            })
    }
}




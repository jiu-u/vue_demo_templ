import axios from "axios"
import qs from "qs"

export const paramsSerializer = (params) => qs.stringify(params, { indices: false })

const apiClient = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 5000,
	paramsSerializer,
})

let isRefreshing = false
let refreshSubscribers = []

const requestSuccessCb = (config) => {
	// ?从store中获取，或者从localStorage中获取

	// 添加请求头
	// const token = localStorage.getItem("token")
	// if (token) {
	// 	config.headers.Authorization = `Bearer ${token}`
	// }
	return config
}

const requestErrorCb = (error) => {
	return Promise.reject(error)
}

const responseSuccessCb = (response) => {
	return response
}

const emptyAsync = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("token")
		}, 1000)
	})
}

const responseErrorCb = async (error) => {
	const originalRequest = error.config

	// 检测到 401 且未重试过
	if (error.response?.status === 401 && !originalRequest._retry) {
		if (isRefreshing) {
			isRefreshing = true
			try {
				const token = await emptyAsync()
				// 配置AccessToken存储
				localStorage.setItem("token", token)
				// 通知所有等待的请求
				refreshSubscribers.forEach((callback) => callback(newAccessToken))
				refreshSubscribers = []
				// 重试当前请求
				return apiClient(originalRequest)
			} catch (error) {
				// !rt过期或者不对
				// 跳转登录
				// 清除登录信息
				window.location.href = "/login"
				return Promise.reject(error)
			}
		} else {
			return new Promise((resolve) => {
				refreshSubscribers.push((newToken) => {
					originalRequest.headers.Authorization = `Bearer ${newToken}`
					resolve(apiClient(originalRequest))
				})
			})
		}
	}

	return Promise.reject(error)
}

apiClient.interceptors.request.use(requestSuccessCb, requestErrorCb)
apiClient.interceptors.response.use(responseSuccessCb, responseErrorCb)

export default apiClient

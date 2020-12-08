import axios from 'axios'
import settings from '@/settings.js'
import {
    getToken
} from '@/utils/auth.js'

// import {
//     message
// } from 'ant-design-vue'


const configFn = function (config) {
    config.headers['Admin-Token'] = getToken()
    return config;
}

const responseFn = function (response) {
    const { data } = response
    if (data && data.success) {
        return data
    }
    console.log("error message")
    return Promise.reject(response);
}

const responseErrorFn = function (error) {
    console.error(error)
    if (error.response) {
        switch (error.response.status) {
            case 401:
                confirm('过期')
        }
    }
    return Promise.reject(error);
}

const request = axios.create(settings.axios)

// 添加请求拦截器
request.interceptors.request.use(configFn, (error) => Promise.reject(error));

// 添加响应拦截器
request.interceptors.response.use(responseFn, responseErrorFn);
// request.interceptors.response.eject
export default request
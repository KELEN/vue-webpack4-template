import axios from 'axios'

window.axios = axios;
const API_URL = process.env.BASE_URL

const instance = axios.create({
    baseURL: API_URL,
    timeout: 10000
});

instance.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
instance.interceptors.response.use(
    response => {
        if (response.data.code === 200) {
            return response.data.data;
        } else {
            return response;
        }
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        console.log(error);
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

export default instance;
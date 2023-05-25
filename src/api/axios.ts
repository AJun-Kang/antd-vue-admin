import axios from 'axios';
import { useCounterStore } from '../store/index'

const instance = axios.create({
    baseURL: 'https://kjk.com', //域名  自行修改
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('logintoken') //tohen 自行修改
    },
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// pinia仓库
const userStore = useCounterStore()

const post = (url: string, data: any) => {
    return instance.post(url, data).then((res) => {
        console.log("post接口获取");
        console.log(res);
        // 调用仓库里的自定义存储方法 (现在仓库里有Token了)
        userStore.login_status = true //例如改变pinia仓库的值,获取调用某个方法
    })
}

const get = (url: string, data: any) => {
    return instance.post(url, data).then((res) => {
        console.log("get接口获取");
        console.log(res);
        // 调用仓库里的自定义存储方法 (现在仓库里有Token了)
        //userStore.login_status = true //例如改变pinia仓库的值,获取调用某个方法
    })
}


export { get, post };


import React from 'react'
import axios from 'axios'
import Routes from '../routes/index'

/*请求携带cookie,配置接口调用前缀*/
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '/earth';

class Root extends React.Component {
    componentWillMount() {
        axios.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            console.log('response', response);
            return response;
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }

    render() {
        return (
            <Routes />
        )
    }
}

export default Root
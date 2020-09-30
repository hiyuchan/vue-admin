import axios from 'axios'
import {Message} from 'element-ui'
import {getToken, getUsername} from './kit.js'

//创建axios，赋值变量service
//手把手撸前端API地址: 'http://www.web-jshtml.cn/productapi'

const BASEURL = process.env.NODE_ENV === 'production'? '': '/devApi'
const service = axios.create({
    baseURL: BASEURL,  //http://192.168.1.109:8088/api == http://www.web-jshtml.cn/productapi 
    timeout: 15000
    
});


//添加请求拦截器
service.interceptors.request.use(function(config){
    //在发送之前做些什么
    //token
    //userid
    //业务需求

    // console.log(config.header);

    config.headers['tokey'] = getToken();
    config.headers['username'] = getUsername();
    
    return config;
},function(error){
    //对请求错误做些什么
    return Promise.reject(error);
})

//添加请求拦截器
service.interceptors.response.use(function(response){
    let data = response.data;
    if(data.resCode !== 0){
        Message.error(data.message)
        return Promise.reject(data)
    }
    //对响应数据做些什么
    return response;
},function(error){
    //对响应错误做些什么
    return Promise.reject(error);
})

export default service;
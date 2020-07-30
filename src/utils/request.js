import axios from 'axios'

//创建axios，赋值变量service
//手把手撸前端API地址: 'http://www.web-jshtml.cn/productapi'

const BASEURL = process.env.NODE_ENV === 'production'? '': '/devApi'
const service = axios.create({
    baseURL: BASEURL,  //http://192.168.1.109:8088/api == http://www.web-jshtml.cn/productapi 
    timeout: 15000
    
});

console.log(service.baseURL)

//添加请求拦截器
service.interceptors.request.use(function(config){
    console.log(config)
    //在发送之前做些什么
    return config;
},function(error){
    //对请求错误做些什么
    return Promise.reject(error);
})

//添加请求拦截器
service.interceptors.response.use(function(response){
    //对响应数据做些什么
    console.log(response)
    return response;
},function(error){
    //对响应错误做些什么
    return Promise.reject(error);
})

export default service;
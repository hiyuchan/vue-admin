"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _elementUi = require("element-ui");

var _kit = require("./kit.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi';

var service = _axios["default"].create({
  baseURL: BASEURL,
  //http://192.168.1.109:8088/api == http://www.web-jshtml.cn/productapi 
  timeout: 15000
}); //添加请求拦截器


service.interceptors.request.use(function (config) {
  //在发送之前做些什么
  //token
  //userid
  //业务需求
  // console.log(config.header);
  config.headers['tokey'] = (0, _kit.getToken)();
  config.headers['username'] = (0, _kit.getUsername)();
  return config;
}, function (error) {
  //对请求错误做些什么
  return Promise.reject(error);
}); //添加请求拦截器

service.interceptors.response.use(function (response) {
  var data = response.data;

  if (data.resCode !== 0) {
    _elementUi.Message.error(data.message);

    return Promise.reject(data);
  } //对响应数据做些什么


  return response;
}, function (error) {
  //对响应错误做些什么
  return Promise.reject(error);
});
var _default = service;
exports["default"] = _default;
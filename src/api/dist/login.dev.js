"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSms = getSms;
exports.Login = Login;
exports.Register = Register;

var _request = _interopRequireDefault(require("utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
* 获取验证码
*/
function getSms(data) {
  return _request["default"].request({
    method: 'POST',
    url: '/getSms/',
    data: data
  });
}
/**
 * 登录
 */


function Login(data) {
  return _request["default"].request({
    method: 'post',
    url: '/login/',
    data: data
  });
}
/**
 * 注册
 */


function Register(data) {
  return _request["default"].request({
    method: 'post',
    url: '/register/',
    data: data
  });
} // export {getCode}
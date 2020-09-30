"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePhone = validatePhone;
exports.validatePassword = validatePassword;
exports.validateEmail = validateEmail;
exports.$comfirm1 = $comfirm1;

var _elementUi = require("element-ui");

function validatePhone(value) {
  var regexPhone = /^1([38][0-9]|4[5-9]|5[0-3,5-9]|66|7[0-8]|9[89])[0-9]{8}$/;
  return regexPhone.test(value);
}

function validatePassword(value) {
  var regexPass = /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{7,17}$/;
  return regexPass.test(value);
}

function validateEmail(value) {
  var regexEmail = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return regexEmail.test(value);
}

function $comfirm1(params) {
  _elementUi.MessageBox.confirm(params.content, params.tip || "提示", {
    confirmButtonText: "确定",
    cancelButtonText: '取消',
    type: params.type || "warning",
    center: true
  }).then(function () {
    params.fn && params.fn(params.id);
  })["catch"](function () {});
}
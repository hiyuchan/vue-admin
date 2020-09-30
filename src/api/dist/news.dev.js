"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddFirstCategory = AddFirstCategory;
exports.GetCategoryAll = GetCategoryAll;

var _request = _interopRequireDefault(require("utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 添加一级分类
 */
function AddFirstCategory(data) {
  return _request["default"].request({
    method: "post",
    url: "/news/addFirstCategory/",
    data: data
  });
}
/**
 * 获取分类列表·
 */


function GetCategoryAll(data) {
  return _request["default"].request({
    method: 'post',
    url: '/news/getCategoryAll/',
    data: data
  });
}
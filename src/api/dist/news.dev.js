"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddInfo = AddInfo;
exports.AddFirstCategory = AddFirstCategory;
exports.AddSecondCategory = AddSecondCategory;
exports.GetCategoryAll = GetCategoryAll;
exports.DeleteCategory = DeleteCategory;
exports.EditCategory = EditCategory;

var _request = _interopRequireDefault(require("utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 新增列表信息 
 */
function AddInfo(data) {
  return _request["default"].request({
    method: "post",
    url: "/news/add/",
    data: data
  });
}
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

function AddSecondCategory(data) {
  return _request["default"].request({
    method: 'post',
    url: '/news/addChildrenCategory/',
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
/**
 * 删除分类
 */


function DeleteCategory(data) {
  return _request["default"].request({
    method: 'post',
    url: '/news/deleteCategory/',
    data: data
  });
}
/**
 * 编辑分类
 */


function EditCategory(data) {
  return _request["default"].request({
    method: 'post',
    url: '/news/editCategory/',
    data: data
  });
}
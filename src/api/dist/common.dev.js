"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.common = common;

var _compositionApi = require("@vue/composition-api");

var _news = require("./news.js");

/**
 * 调用公用数据的接口：
 * 例如: 分类名称，须在多个页面使用
 *
 */
function common() {
  var categoryInfo = (0, _compositionApi.reactive)({
    item: []
  });

  var getCategoryInfo = function getCategoryInfo() {
    (0, _news.GetCategoryAll)().then(function (res) {
      var data = res.data.data;
      categoryInfo.item = data;
    })["catch"](function (err) {
      console.log(err);
    });
  };

  return {
    categoryInfo: categoryInfo,
    getCategoryInfo: getCategoryInfo
  };
}
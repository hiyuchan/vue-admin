"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _elementUi = require("element-ui");

var _default = {
  install: function install(Vue, options) {
    Vue.prototype.$confirm = function (params) {
      _elementUi.MessageBox.confirm(params.content, params.tip || "提示", {
        confirmButtonText: "确定",
        cancelButtonText: '取消',
        type: params.type || "warning",
        center: true
      }).then(function () {
        params.fn && params.fn(params.id);
      })["catch"](function () {});
    };
  }
};
exports["default"] = _default;
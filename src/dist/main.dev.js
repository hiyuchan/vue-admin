"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _compositionApi = _interopRequireDefault(require("@vue/composition-api"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

require("./icons");

require("./router/premit");

var _global = _interopRequireDefault(require("./utils/global.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import './utils/kit.js'
//全局方法
_vue["default"].use(_elementUi["default"]);

_vue["default"].use(_global["default"]);

_vue["default"].use(_compositionApi["default"]);

_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");
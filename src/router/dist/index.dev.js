"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HomePage = _interopRequireDefault(require("../views/HomePage.vue"));

var _UserPage = _interopRequireDefault(require("../views/UserPage.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/user',
  component: _UserPage["default"]
}, {
  path: '/',
  component: _HomePage["default"],
  children: [// {
    // //嵌套路由，此处path前不能有'/'
    //     path: 'news',
    //     component: News,
    // },
    // {
    //     path: 'message',
    //     component: Message,
    // }
  ]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;
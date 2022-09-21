"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var request = _axios["default"].create({
  baseURL: ' https://www.escook.cn' // timeout: timeout
  // headers: headers

});

var _default = request;
exports["default"] = _default;
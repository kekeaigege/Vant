"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticlesApi = void 0;

var _http = _interopRequireDefault(require("../util/http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getArticlesApi = function getArticlesApi(page, limit) {
  return _http["default"].get('/articles', {
    params: {
      _page: page,
      _limit: limit
    }
  });
};

exports.getArticlesApi = getArticlesApi;
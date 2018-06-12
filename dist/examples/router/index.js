'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _navConfig = require('../nav.config.json');

var _navConfig2 = _interopRequireDefault(_navConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var routes = [];

Object.keys(_navConfig2.default).forEach(function (header) {
  routes = routes.concat(_navConfig2.default[header]);
});

var addComponent = function addComponent(router) {
  router.forEach(function (route) {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items);
    } else {
      if (route.type === 'pages') {
        route.component = function (r) {
          return require.ensure([], function () {
            return r(require('../pages/' + route.name + '.vue'));
          });
        };
        return;
      }
      route.component = function (r) {
        return require.ensure([], function () {
          return r(require('../docs/' + route.name + '.md'));
        });
      };
    }
  });
};

addComponent(routes);
exports.default = new _vueRouter2.default({
  routes: routes
});
//# sourceMappingURL=index.js.map
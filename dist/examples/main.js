'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _demoBlock = require('./components/demo-block.vue');

var _demoBlock2 = _interopRequireDefault(_demoBlock);

var _index = require('../packages/index');

var _index2 = _interopRequireDefault(_index);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.component('demo-block', _demoBlock2.default);
_vue2.default.use(_index2.default);
_vue2.default.config.productionTip = false;
/* eslint-disable no-new */
new _vue2.default({
  el: '#app',
  router: _router2.default,
  store: _store2.default,
  render: function render(h) {
    return h(_App2.default);
  }
});
//# sourceMappingURL=main.js.map
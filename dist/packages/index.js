'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DjButton = undefined;

var _index = require('./Button/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = "1.0.1"; /**
                        * @author zhangxiaodong
                        * Date: 18/6/3
                        */


var components = [_index2.default];
var install = function install(Vue) {
  components.map(function (component) {
    return Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
exports.DjButton = _index2.default;
exports.default = {
  install: install,
  version: version
};
//# sourceMappingURL=index.js.map
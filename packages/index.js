/**
 * @author zhangxiaodong
 * Date: 18/6/3
 */
import HeaButton from './Button/index.js';

const version = "1.0.1";

const components = [
  HeaButton,
];
const install = function(Vue) {
  components.map(component => Vue.component(component.name, component))
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  HeaButton
}
export default {
  install,
  version
}

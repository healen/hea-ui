/**
 * @author zhangxiaodong
 * Date: 18/6/3
 */
import HeaButton from './Button/index';
import HeaIco from './Ico/index'

const version = "1.0.5";

const components = [
  HeaButton,
  HeaIco,
];
const install = function(Vue) {
  components.map(component => Vue.component(component.name, component))
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  HeaButton,
  HeaIco
}
export default {
  install,
  version
}

/**
 * @author zhangxiaodong
 * Date: 18/6/3
 */
import HeaButton from './Button/index';
import HeaIco from './Ico/index';
import HeaAnimate from './Animate/index';
import HeaRow from './Row/index';
import HeaCol from './Col/index';


import pkg from '../package.json'

const version = pkg.version;

const components = [
  HeaButton,
  HeaIco,
  HeaAnimate,
  HeaRow,
  HeaCol
];
const install = function(Vue) {
  components.map(component => Vue.component(component.name, component))
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  HeaButton,
  HeaIco,
  HeaAnimate,
  HeaRow,
  HeaCol
}
export default {
  install,
  version
}

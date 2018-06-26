/**
 * @author zhangxiaodong
 * Date: 18/6/3
 */
import HButton from './Button/index';
import HButtonGroup from './ButtonGroup/index';
import HIco from './Ico/index';
import HAnimate from './Animate/index';
import HRow from './Row/index';
import HCol from './Col/index';


import pkg from '../package.json'

const version = pkg.version;

const components = [
  HButton,
  HButtonGroup,
  HIco,
  HAnimate,
  HRow,
  HCol
];
const install = function(Vue) {
  components.map(component => Vue.component(component.name, component))
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  HButton,
  HButtonGroup,
  HIco,
  HAnimate,
  HRow,
  HCol
}
export default {
  install,
  version
}

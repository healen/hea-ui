/**
 * @author zhangxiaodong
 * Date: 18/6/3
 */
import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;

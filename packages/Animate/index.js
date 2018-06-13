import Animate from './src/animate';

Animate.install=(Vue)=>{
  Vue.component(Animate.name, Animate);
};

export default Animate;


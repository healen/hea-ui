import  Col from './src/index';

Col.install = (Vue)=>{
  Vue.component(Col.name,Col)
}
export default Col
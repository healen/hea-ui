import  Col from './src';

Col.install = (Vue)=>{
  Vue.component(Col.name,Col)
}
export default Col
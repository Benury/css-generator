// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
window.vueScope = new Vue({
  el: '#app',
  data(){
    return {
      cssObj:[
              {name:'w200', key:'width', value:'200px'},
              {name:'h100', key:'height', value:'100px'}
      ]
    }
  },
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import ExtraUI from '@mi/extra-ui';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element, { size: 'mini' });
Vue.use(ExtraUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data: {
    personName: "Person"
  },
  render: h => h(App),
}).$mount('#app')

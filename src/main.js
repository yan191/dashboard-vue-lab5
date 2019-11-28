import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App),
  vuetify: new Vuetify({})
}).$mount('#app')

axios.interceptors.request.use(function (config) {
  if (localStorage.getItem('token') !== null) {
    config.headers['Authorization'] = localStorage.getItem('token');
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 403) {
    localStorage.removeItem('username');
    localStorage.removeItem('roles');
    localStorage.removeItem('token');

    alert('Ação não permitida, faça o login novamente.');
    router.push('/');
  }
  return Promise.reject(error);
});

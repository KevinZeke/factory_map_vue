import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import store from "./store/vuex"
import 'iview/dist/styles/iview.css';
import './assets/css/bootstrap.min.css'
import './assets/css/main.css'

Vue.config.productionTip = false

Vue.use(iView);

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})

import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import VueResource from 'vue-resource' 
import VuejsDialog from 'vuejs-dialog';
 
// Tell Vue to install the plugin.

 
// Tell Vue to install the plugin.

Vue.use(VueResource)
Vue.use(VueCarousel)
Vue.use(VuejsDialog);


new Vue({
    el: '#app',
    render: h => h(App)
}).$mount('#app')
import { createApp } from 'vue'
//import { use } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/store'
import "bootstrap/dist/css/bootstrap.min.css"

//Vue.config.productionTip = false;
//console.log(Vue.version);

createApp(App)
	.use(store)
	.use(router)
	.mount('#app')

//new Vue({
//	el: '#app',
//	router,
//	store,
//	template: '<App/>',
//	components: {App}
//})

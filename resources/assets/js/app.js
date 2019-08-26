import Vue from 'vue'
import App from './components/Example'
window.$ = window.jQuery = require('jquery');
import SocialSharing from 'vue-social-sharing'

Vue.use(SocialSharing)
new Vue({
	el: 'app',
	components: {
		app: App
	}
})

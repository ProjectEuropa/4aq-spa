import Vue from 'vue'
import App from './components/Example'
window.$ = window.jQuery = require('jquery');

new Vue({
	el: 'app',
	components: {
		app: App
	}
})

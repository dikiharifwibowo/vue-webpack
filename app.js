
import Vue from 'vue';
Vue.component('hello-component', require('./component/HelloComponent').default);
Vue.component('other-component', require('./component/Other-Component').default);

new Vue({
    el: '#app',
    data: {
        message: 'Hello from Webpack'
    }
});

import Vue from 'vue';
import Chakra from '@chakra-ui/vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import { router } from './router';
import { theme } from './styles/theme';

Vue.use(Chakra, { extendTheme: theme });
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');

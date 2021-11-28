import Vue from 'vue';
import Chakra from '@chakra-ui/vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import { theme } from './styles/theme';
import { globalStore } from './stores/GlobalStore';
import { router } from './router';

Vue.use(Chakra, { extendTheme: theme });
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
    router,
    store: globalStore,
    render: (h) => h(App),
}).$mount('#app');

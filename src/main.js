import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import '@/assets/main.css';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');


//const app = createApp(App);
//const pinia = createPinia();
//app.use(pinia);

//const profileStore = useProfileStore();
//profileStore.initializeStore();

//app.mount('#app');
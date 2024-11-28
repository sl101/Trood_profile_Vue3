import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useProfileStore } from './stores/profile';
import App from '@/App.vue';
import '@/assets/variables.css';
import '@/assets/main.css';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

const profileStore = useProfileStore();
profileStore.fetchProfileData();

app.mount('#app');
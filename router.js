import HomeView from './views/HomeView.js';
import SettingsView from './views/SettingsView.js';
import StatsView from './views/StatsView.js';
import BookView from './views/BookView.js';
import BookInputView from './views/BookInputView.js';

const routes = [
  { path: '/', component: HomeView },
  { path: '/settings', component: SettingsView },
  { path: '/stats', component: StatsView },
  { path: '/book/:id', component: BookView },
  { path: '/bookinput', component: BookInputView },
  { path: '/bookinput/:id', component: BookInputView }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});
import { router } from './router.js';
const { createApp } = Vue;

const htmlTemplate = /*html*/`
<div>
    <header>
        <nav aria-labelledby="main-nav" class="bottom-nav">
            <ul>
                <li>
                    <label for="home" class="visually-hidden">Home</label>
                    <router-link to="/" id="home">&#127968; Home</router-link>
                </li>
                <li>
                    <label for="stats" class="visually-hidden">Stats</label>
                    <router-link to="/stats" id="stats">&#128202; Stats</router-link>
                </li>
                <li>
                    <label for="settings" class="visually-hidden">Settings</label>
                    <router-link to="/settings" id="settings">&#128295; Settings</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <router-view></router-view>
    </main>
</div>
`

const App = {
    template: htmlTemplate
};

createApp(App).use(router).mount('#app');
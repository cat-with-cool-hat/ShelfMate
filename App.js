import { router } from './router.js';
const { createApp } = Vue;

const htmlTemplate = /*html*/`
<div>
    <header>
        <nav aria-labelledby="main-nav" class="bottom-nav">
            <ul>
                <li>
                    <label for="home" class="visually-hidden">Home</label>
                    <router-link to="/" id="home" tabindex="0">&#127968; Home</router-link>
                </li>
                <li>
                    <label for="stats" class="visually-hidden">Stats</label>
                    <router-link to="/stats" id="stats" tabindex="0">&#128202; Stats</router-link>
                </li>
                <li>
                    <label for="profile" class="visually-hidden">Notes</label>
                    <router-link to="/profile" id="profile" tabindex="0">&#128211; Notes</router-link>
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
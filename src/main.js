import '../public-path'
import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router'
import SUI from 's-ui'

// createApp(App).use(store).use(router).mount('#app')


let instance = null
let router = null

function render({ container } = {}) {
    instance = createApp(App).use(SUI)
    router = createRouter({
        history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/comp2' : ''),
        routes
    })
    instance.use(router)
    instance.use(store)
    instance.mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
    render()
}

export async function bootstrap() {
    console.info('vue3 bootstrap')
}

export async function mount(props) {
    render(props)
}

export async function unmount() {
    instance.unmount()
    instance._container.innerHTML = ''
    instance = null
    router = null
}

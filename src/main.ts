import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { defineCustomElement } from 'vue'
import MarkdownComponent from './components/article/MarkdownComponent.ce.vue'

const Markdown = defineCustomElement(MarkdownComponent)
customElements.define('markdown-element', Markdown)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { defineCustomElement } from 'vue'
import MarkdownComponent from './components/article/MarkdownComponent.ce.vue'
import { i18nConfig } from './dict/dictionary'

const Markdown = defineCustomElement(MarkdownComponent)
customElements.define('markdown-element', Markdown)
const app = createApp(App)
const i18n = i18nConfig
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

import "@unocss/reset/normalize.css"

import "./styles/main.scss"
import "virtual:uno.css"

import { createApp } from "vue"
import store from "./stores"
import components from "./components"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(store)
app.use(router)
app.use(components)

app.mount("#app")

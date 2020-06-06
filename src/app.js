import Vue from 'vue'
import App from './app.vue'
import router from "./router";
import store from './store/index'
import { sync } from "vuex-router-sync";

export function createApp () {

    // sync so that route state is available as part of the store
    sync(store, router)

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return { app, router, store }
}

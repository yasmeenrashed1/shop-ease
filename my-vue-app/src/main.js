import { createApp, reactive } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Products from './pages/Products.vue'
import Cart from './pages/Cart.vue'
import Contact from './pages/Contact.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export const store = reactive({
  cart: JSON.parse(localStorage.getItem("cart") || "[]")
})

export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(store.cart))
}

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/about', component: About },
  { path: '/cart', component: Cart },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')


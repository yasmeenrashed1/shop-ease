<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">ShopEase</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/products">Products</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              Cart ({{ cartCount }})
            </router-link>
          </li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { store } from '../main'

export default {
  computed: {
    cartCount() {
      return store.cart.reduce((sum, i) => sum + i.quantity, 0)
    }
  }
}
</script>

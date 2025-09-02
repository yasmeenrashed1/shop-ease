<template>
  <div class="container py-4">
    <h2 class="mb-4">Products</h2>
    <input v-model="search" class="form-control mb-4" placeholder="Search products..."/>
    <div class="row">
      <div v-for="p in filtered" :key="p.id" class="col-md-4 col-lg-3 mb-4">
        <div class="card h-100">
          <img :src="p.image" class="card-img-top p-3" height="200"/>
          <div class="card-body d-flex flex-column">
            <h6 class="card-title mb-2">{{ p.title }}</h6>
            <p class="fw-bold">\${{ p.price }}</p>
            <button class="btn btn-primary mt-auto" @click="addToCart(p)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store, saveCart } from '../main'

export default {
  data() {
    return { products: [], search: "" }
  },
  async mounted() {
    const res = await fetch("https://fakestoreapi.com/products")
    this.products = await res.json()
  },
  computed: {
    filtered() {
      return this.products.filter(p =>
        p.title.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  methods: {
    addToCart(product) {
      const item = store.cart.find(i => i.id === product.id)
      if (item) {
        item.quantity++
      } else {
        store.cart.push({ ...product, quantity: 1 })
      }
      saveCart()
    }
  }
}
</script>

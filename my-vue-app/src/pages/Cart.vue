<template>
  <div class="container py-4">
    <h2 class="mb-4">Your Cart</h2>
    <div v-if="cart.length === 0" class="alert alert-info">Cart is empty</div>
    <div v-else>
      <table class="table table-striped align-middle">
        <thead class="table-dark">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>{{ item.title }}</td>
            <td>\${{ item.price }}</td>
            <td>
              <div class="d-flex align-items-center">
                <button class="btn btn-sm btn-secondary me-2" @click="decrease(item)">-</button>
                {{ item.quantity }}
                <button class="btn btn-sm btn-secondary ms-2" @click="increase(item)">+</button>
              </div>
            </td>
            <td>\${{ (item.price * item.quantity).toFixed(2) }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeItem(item.id)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end mt-3">
        <h4>Grand Total: <span class="text-success">\${{ total.toFixed(2) }}</span></h4>
      </div>
    </div>
  </div>
</template>

<script>
import { store, saveCart } from '../main'

export default {
  computed: {
    cart() { return store.cart },
    total() { return store.cart.reduce((sum, i) => sum + i.price * i.quantity, 0) }
  },
  methods: {
    increase(item) { item.quantity++; saveCart() },
    decrease(item) { if(item.quantity > 1) item.quantity--; saveCart() },
    removeItem(id) { store.cart = store.cart.filter(i => i.id !== id); saveCart() }
  }
}
</script>

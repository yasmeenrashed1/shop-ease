<template>
  <div class="col-md-4 mb-4">
    <div class="card h-100 shadow-sm">
      <img :src="product.image" class="card-img-top" height="200" alt="">
      <div class="card-body d-flex flex-column">
        <h6 class="fw-bold">{{ product.title }}</h6>
        <p class="text-muted small mb-2">${{ product.price }}</p>
        <button 
          class="btn btn-primary mt-auto"
          @click="$emit('add-to-cart', product)">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

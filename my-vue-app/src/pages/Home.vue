<template>
  <div class="home-hero">
    <h1 class="display-3 mb-3 fw-bold">ShopEase</h1>
    <p class="lead mb-4">
      Welcome to ShopEase, your all-in-one online marketplace.  
      Find fashion, electronics, and home essentials with just a few clicks.  
      Enjoy a smooth shopping experience tailored for you.
    </p>
    <router-link to="/products" class="btn btn-lg btn-light fw-bold">
      Start Shopping
    </router-link>
  </div>
</template>

<style>
.home-hero {
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
</style>

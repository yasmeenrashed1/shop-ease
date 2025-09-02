<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <div class="flex-grow-1">
      <router-view />
    </div>
    <FooterBar />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FooterBar from './components/Footer.vue'

export default {
  components: { Navbar, FooterBar }
}
</script>


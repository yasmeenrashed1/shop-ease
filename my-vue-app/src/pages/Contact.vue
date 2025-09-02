<template>
  <div class="container py-4">
    <h2 class="mb-4">Contact Us</h2>

    <!-- Contact Information -->
    <div class="card p-4 shadow-sm mb-4">
      <h5 class="mb-3">Get in Touch</h5>
      <p class="mb-1"><strong>Email:</strong> support@shopease.com</p>
      <p class="mb-0"><strong>Phone:</strong> +20 100 123 4567</p>
    </div>

    <!-- Contact Form -->
    <form @submit.prevent="submitForm" class="card p-4 shadow-sm">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input v-model="name" class="form-control"/>
        <div v-if="errors.name" class="form-error text-danger">{{ errors.name }}</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email" class="form-control" type="email"/>
        <div v-if="errors.email" class="form-error text-danger">{{ errors.email }}</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea v-model="message" class="form-control"></textarea>
        <div v-if="errors.message" class="form-error text-danger">{{ errors.message }}</div>
      </div>
      <button class="btn btn-success">Send</button>
    </form>

    <div v-if="success" class="alert alert-success mt-3">Thank you for contacting us!</div>
  </div>
</template>

<script>
export default {
  data() {
    return { name:"", email:"", message:"", success:false, errors:{} }
  },
  methods: {
    submitForm() {
      this.errors = {}
      if (!this.name) this.errors.name = "Name is required"
      if (!this.email) this.errors.email = "Email is required"
      if (!this.message) this.errors.message = "Message is required"
      if (Object.keys(this.errors).length === 0) {
        this.success = true
        this.name = this.email = this.message = ""
      }
    }
  }
}
</script>

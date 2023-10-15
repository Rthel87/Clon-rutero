<script setup>
import Navbar from '../components/Navbar.vue'
import Blog from '../components/Blog.vue'
import Footer from '../components/Footer.vue'

const props = defineProps(['num'])

</script>

<template>
  <Navbar />
  <Blog />
  <Footer />
</template>

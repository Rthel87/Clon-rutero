<script setup>
import Navbar from '../components/Navbar.vue'
import Blog from '../components/Blog.vue'
import Footer from '../components/Footer.vue'

const props = defineProps(['query'])

</script>

<template>
  <Navbar />
  <Blog :page="parseInt(props.query)" />
  <Footer />
</template>

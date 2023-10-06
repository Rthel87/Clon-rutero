<script setup>
import { ref, onMounted } from 'vue'
import Card from './Card.vue'

let data = ref([])

const getBlogData = async () => {
  let res = await fetch('src/data/blog-data.json')
  let file = await res.json()
  data.value = file
  console.log(data)
}

onMounted(() => {
  getBlogData()
})

</script>

<template>
  <section class="section page-section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-11 col-xl-10">
          <h1 class="page-title">Blog</h1>
          <div class="page-content">
            <div class="row pt-4">
              <template v-for="element in data">
                <Card :img-url="element.photo" :title="element.title" :data-id="element.dataId" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

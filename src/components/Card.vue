<script setup>
import { computed } from 'vue'

const props = defineProps(['imgUrl', 'title', 'dataId'])

const imgSource = 'src/assets/cards/' + props.imgUrl
//const regexp = /[¿¡!\?\:áéíóú]/g
const regexp = /[¿¡!\?\:]/g

const titleLink = computed(() => {
  let finalString = ''
  if (props.title.length > 0) {
    finalString = props.title.replaceAll(regexp, '')
    finalString = finalString.normalize('NFD').replaceAll(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()
    finalString = finalString.replaceAll(' ', '-').toLowerCase()
  }
  return "/blog/" + finalString
})

</script>

<template>
  <div class="col-12 col-md-6 col-lg-6">
    <div class="card camping-card" :data-id="props.dataId">
      <a class="camping-card-cover-container" :href="titleLink">
        <img class="camping card-cover unveil" :src="imgSource" alt="">
      </a>
      <p class="camping-card-title">
        <a :href="tittleLink">{{ props.title }}</a>
      </p>
    </div>
  </div>
</template>

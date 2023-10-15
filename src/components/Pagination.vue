<script setup>
import { computed } from 'vue'

const props = defineProps(['visiting'])

const blogDir = '/blog?page='

const toShow = computed(() => {
  if (props.visiting >= 10) {
    return 14
  }
  return props.visiting + 4
})

const fromShow = computed(() => {
  if (props.visiting > 4) {
    return props.visiting - 4
  }
  return 1
})

const pages = computed(() => {
  let list = []
  for (var i = fromShow.value; i <= toShow.value; i++) {
    list.push(i)
  }
  return list
})

const showPrev = computed(() => {
  return fromShow.value > 1
})

const showNext = computed(() => {
  return toShow.value < 14
})

const prevPage = computed(() => {
  return blogDir + (props.visiting - 1)
})

const nextPage = computed(() => {
  return blogDir + (props.visiting + 1)
})

const linkAttributes = (page) => {
  const dir = blogDir + page
  if (page === props.visiting) {
    return {
      remote: 'false'
    }
  }
  if (page === 1) {
    return {
      href: '/'
    }
  }
  return {
    href: dir
  }
}

</script>

<template>
  <div class="row">
    <div class="col-12 pagination-container">
      <ul class="pagination justify-content-center">
        <li v-if="showPrev" class="page-item">
          <a class="page-link prev" :href="prevPage" rel="prev">
            <i class="fa fa-angle-left"></i>
          </a>
        </li>
        <li v-if="showPrev" class="page-item disabled">
          <a class="page-link" href="#">...</a>
        </li>
        <template v-for="page in pages">
          <li class="page-item" :class="page === props.visiting ? 'active' : ''">
            <a class="page-link" v-bind="linkAttributes(page)">{{ page }}</a>
          </li>
        </template>
        <li v-if="showNext" class="page-item disabled">
          <a class="page-link" href="#">...</a>
        </li>
        <li v-if="showNext" class="page-item">
          <a class="page-link next" :href="nextPage" rel="next">
            <i class="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

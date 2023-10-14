<script setup>
import { computed } from 'vue'

const props = defineProps(['visiting'])

const toShow = computed(() => {
  return props.visiting + 5 - 1
})

const fromShow = computed(() => {
  if (props.visiting > 4) {
    return props.visiting - 4
  }
  return 1
})

const pages = computed(() => {
  let list = []
  for (var i = fromShow; i <= toShow; i++) {
    list.push(i)
  }
  return list
})

const showPrev = computed(() => {
  return fromShow > 1
})

const linkAttributes = (page) => {
  const dir = '/blog?page=' + page
  if (page === props.visiting) {
    return {
      remote: 'false'
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
          <a class="page-link prev" href="#" rel="prev">
            <i class="fa fa-angle-left"></i>
          </a>
        </li>
        <li v-if="showPrev" class="page-item disabled">
          <a class="page-link" href="#">...</a>
        </li>
        <template v-for="page in pages">
          <li class="page-item">
            <a class="page-link" :class="{ page === props.visiting ? 'active' : '' }" v-bind="linkAttributes(page)">{{ page }}</a>
          </li>
        </template>
        <li class="page-item disabled">
          <a class="page-link" href="#">...</a>
        </li>
        <li class="page-item">
          <a class="page-link next" href="#" rel="next">
            <i class="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

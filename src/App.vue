<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue"


export default {
  name: 'App',
  setup() {
    const asideVisible = ref(false)
    // provide 可以提供一个变量给子组件使用
    provide('asideVisible', asideVisible) // set
  }
}

</script>

<style>
</style>

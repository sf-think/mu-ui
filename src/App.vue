<script setup lang="ts">


</script>

<template>
  <div>导航栏 |
    <router-link to="/">Murphy</router-link> |
    <router-link to="/x">Murphy2</router-link>
  </div>
  <hr>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

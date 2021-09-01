<template>
  <div class="app">
      <router-view></router-view>
  </div>
</template>
<script>
export default {
 name: 'App',
 comments: {
 }
}
</script>
<style lang="scss">
  .app{
    width: 1200px;
    min-height: 100vh;
    min-width: 1200px;
    margin: 0 auto;
  }
</style>

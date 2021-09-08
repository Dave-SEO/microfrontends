<template>
<div>
  <router-view></router-view>
</div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  }
})
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
   width: 1200px;
    min-height: 100vh;
    min-width: 1200px;
    margin: 0 auto;
}
</style>

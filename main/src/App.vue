<template>
<div>
  <Nav />
  <router-view></router-view>
</div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from './components/Nav.vue'
export default defineComponent({
  name: 'App',
  components: {
    Nav
  }
})
</script>

<style lang='scss'>
#app {
    margin: 0 auto;
}
</style>

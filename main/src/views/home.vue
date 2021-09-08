<template>
  <div>

  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'
export default defineComponent({
  name: '',
  components:{

  },
  props: {
    modelValue: {
      type: Number || String,
      required:true
    },
  },
  setup() { 
   const state = reactive({ 
    })
    return { 
      ...toRefs(state) 
    }
  }
 })
</script>

<style lang="scss" scoped>
</style>
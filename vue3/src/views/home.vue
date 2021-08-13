<template>
  <div>
      <CartConfig />
     <div class="cartTwo">
          <Carousel />
          <List />
      </div>
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'
import {useStore} from '../store'
import axios from 'axios'
import Carousel from '../components/Carousel.vue'
import List from '../components/List.vue'
import CartConfig from '../components/cartConfig.vue'
export default defineComponent({
  name: 'home',
  components:{
    Carousel,
    List,
    CartConfig
  },
  props: {
  },
  setup() { 
   const state = reactive({ 
    })
    // const store = useStore()
    // axios.get('/api/getRecommend').then(res => {})
    return { 
      ...toRefs(state) 
    }
  }
 })
</script>

<style lang="scss" scoped>
.cartTwo{
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
}
</style>
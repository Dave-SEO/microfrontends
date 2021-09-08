<template>
    <div class="energy">
        <TabCart />
        <div class="cartTwo">
            <Carousel />
            <List />
        </div>
         <TabCart :type='1'/>
    </div>
</template>
<script>
// import { Tabs, TabPane } from 'element-ui';
import TabCart from '@/components/TabCart.vue'
import Carousel from '@/components/Carousel.vue'
import List from '@/components/List.vue'
export default {
 name: 'energy',
 data() {
     return {
        
     }
 },
 methods: {
 },
 components: {
    TabCart,
    Carousel,
    List
 }
}
</script>
<style lang="scss">
    .energy{
      .cartTwo{
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
      }
    }
</style>
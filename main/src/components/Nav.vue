<template>
  <div>
    <header class="header">
      <ul class="tab">
        <li v-for="(item, index) in NavList" :key="item.path" :class="{'active': index === tabIndex}">
          <a href="javascript:;" @click="methods.linkTo(item.path, index)">{{item.name}}</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, watch} from 'vue'
import {NavList} from '../../headerLink'
import {useStore} from '../store'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'home',
  components:{
  },
  props: {
  },
  setup() { 
   const state = reactive({
     NavList,
     tabIndex: 0
    })
    const router = useRouter()
    const route = useRoute()
    // const store = useStore()
    watch(route, (val) => {
      const index = NavList.findIndex(ret => ret.path === val.fullPath)
      if(index > 0){
        state.tabIndex = index
      }else{
        state.tabIndex = 0
      }
    },{
      deep: true
    })
    const methods = {
      linkTo(path: string, index: number){
        state.tabIndex = index
        router.push(path)
      }
    }
    return { 
      ...toRefs(state),
      methods
    }
  }
 })
</script>

<style lang="scss" scoped>
.header{
  height: 60px;
  background-image: linear-gradient(#3f50e5, #83c7ea);
  .tab{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    li{
      position: relative;
      height: 100%;
      margin-right: 30px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      &.active::after{
        position: absolute;
        bottom: 0;
        content: ' ';
        width: 100%;
        height: 0;
        font-size: 0;
        display: block;
        border-bottom: 4px solid #dcb023;
      }
      a{
        color: #fff;
      }
    }
  }
}
</style>
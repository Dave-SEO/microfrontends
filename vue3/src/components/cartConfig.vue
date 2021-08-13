<template>
  <div>
      <ul class="box" v-for="item in 3" :key="item">
          <li class="name">suv</li>
          <li>
              <span>别克</span>
              <div>
                  <span>配置</span>｜
                  <span>图表</span>｜
                  <span>优惠</span>
              </div>
          </li>
          <li>
              <span>别克</span>
              <div>
                  <span>配置</span>｜
                  <span>图表</span>｜
                  <span>优惠</span>
              </div>
          </li>
          <li>
            <span>别克</span>
              <div>
                  <span>配置</span>｜
                  <span>图表</span>｜
                  <span>优惠</span>
              </div>
          </li>
      </ul>
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'
export default defineComponent({
  name: 'cartConfig',
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
.box{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #f6f6f6;
    padding: 20px 0;
    li{
        min-width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 20px;
        font-size: 13px;
        &.name{
            font-size: 25px;
        }
    }
    &:last-child{
        border-bottom: none;
    }
}
</style>
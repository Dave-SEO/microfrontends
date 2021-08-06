<template>
  <div class="selectCart">
      <div class="anchor-box">
        <Anchor wrapperClass='anchor' @click="anchorhandler" :targetOffset='30' >
             <AnchorLink :href="`#pictree_${item.id}`" :title="item.name" v-for='item in wordList' :key="item.id"/>
        </Anchor>
        <div class="anchor-content">
            <div v-html="Carthtml" class="tree"></div>
        </div>
      </div>
      <div class="cartContent">
          <div class="cartList" v-for="item in 10" :key="item">
              <img src="https://img.pcauto.com.cn/images/upload/upc/tx/auto5/2102/10/c16/253265158_1612965869745_180x135.jpg">
              <h5>蹦腾</h5>
              <span>56-99万</span>
          </div>
      </div>
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'
import {Anchor, AnchorLink} from 'ant-design-vue'
import {Carthtml} from '../assets/js/carthtml'
import {wordList} from '../assets/js/cartList'
export default defineComponent({
  name: 'selectCart',
  components:{
    Anchor, AnchorLink
  },
  props: {
    modelValue: {
      type: Number || String,
      required:true
    },
  },
  setup() { 
   const state = reactive({
       wordList,
       Carthtml
    })

    const anchorhandler = (e: Event, link: {href: string,title: string}) => {
        e.preventDefault();
        if(link.href) {
            const pictreeTitEl = document.querySelectorAll('.pictreeTit')
            const pictreeindex = Array.from(pictreeTitEl).findIndex((item, i) => 
                                    (item as HTMLLIElement).innerText === link.title)
            pictreeindex >= 0 ? pictreeTitEl[pictreeindex].scrollIntoView(true) : -1
	    }
    }
    return { 
      ...toRefs(state),
      anchorhandler
    }
  }
 })
</script>

<style lang="scss" scoped>
:deep(.anchor){
    width: 30px;
    background-color: #69baff;
    .ant-anchor-link{
        padding: 5px;
         .ant-anchor-link-title{
            color: #fff;
            font-weight: bold;
        }
    }
}
:deep(.anchor-content){
    height: 100vh;
    overflow-y: auto;
}
.anchor-box{
    width: 270px;
    display: flex;
    justify-content: flex-start;
    .anchor-content{
        flex: 1;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
    }
}
.selectCart{
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    text-align: center;
}
:deep(.tree){
    .pictreeTit{
        height: 35px;
        line-height: 35px;
        font-weight: bold;
        background-color: #f5f5f5;
        font-size: 18px;
    }
    .ppLink {
        display: block;
        line-height: 24px;
        padding: 10px 14px;
        border-bottom: 1px solid #e9e9e9;
    }
    .logo{
        margin-right: 15px;
    }
    .sname {
        font-size: 14px;
    }
    .snum, .tree .openChild .subTable .product span {
        color: #999;
    }
    .logo img {
         vertical-align: middle;
    }
}
.cartContent{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    .cartList{
        width: 180px;
        height: 200px;
        margin-right: 10px;
        h5{
            margin-bottom: 10px;
        }
    }
}
</style>
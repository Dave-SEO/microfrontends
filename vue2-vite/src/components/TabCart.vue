<template>
    <div class="tabCart">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="item" :name="index + ''" v-for="(item, index) in tabCartData" :key="index">
               <div class="tabContainer" :class="{'cartTwoList': type === 1}">
                    <div v-for="(item, index) in cart" :key="index" class="tabList">
                        <el-image :src="item.url" fit="fit" class="image"></el-image>
                        <span class="name">{{item.name}}</span>
                    </div>
               </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import { Tabs, TabPane, Image } from 'element-ui';
import axios from 'axios'
export default {
 name: 'TabCart',
 props: {
     type: {
         type: Number,
         default: 0
     }
 },
 data() {
     return {
         activeName: '0',
         tabCartData: ['推荐', '热门车系', '10万以下', '10-20万', '20-30万', '30万以上'],
         cart: []
     }
 },
 mounted() {
    this.init()
 },
 methods: {
    async init(){
       const {data: {data}} = await axios.get('http://localhost:3000/cart/cartlist?page=1')
       console.log(data)
       this.cart = data
     },
     handleClick(){

     }
 },
 components: {
     'el-tabs': Tabs,
     'el-tab-pane': TabPane,
     'el-image': Image
 }
}
</script>
<style lang="scss">
    .tabCart{
        .tabContainer{
            display: flex;
            justify-content: flex-start;
            overflow-x: auto;
            .tabList{
                width: 200px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;
                align-items: center;
                margin-right: 30px;
                cursor: pointer;
                .name{
                    font-size: 14px;
                    font-weight: normal;
                    color: #333;
                }
                .image{
                    width: 147px;
                    height: 74px;
                }
            }
        }
    }
.tabCart {
    .cartTwoList{
        flex-direction: column;
        .tabList{
            width: 100%;
            flex-direction: row;
            justify-content: flex-start;
            border-bottom: 1px solid #f6f6f6;
            padding: 10px 0;
        }
    }
}
</style>
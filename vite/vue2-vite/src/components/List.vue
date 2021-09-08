<template>
  <div class="listBox">
     <h4>配置升级：试驾2021款凯迪拉克</h4>
     <ul class="list">
         <li v-for="item in 10" :key="item">
            <a href="javascript:;">进一步了解林肯的最新动向和未来活动信息？请留下您的资料，一切轻松掌握</a>
         </li>
     </ul>
  </div>
</template>
<script>
export default {
 name: 'List',
 comments: {
 }
}
</script>
<style lang="scss">
  .listBox{
      h4{
           color: #333;
      }
      .list{
          height: 240px;
          overflow-y: auto;
          li{
              line-height: 30px;
              a{
                  color: #333;
                  text-decoration: none;
              }
          }
      }
  }
</style>

<template>
    <div class="carouselBox">
        <el-carousel :autoplay='true' class="carousel" height='300px'>
            <el-carousel-item v-for="(item, index) in banner" :key="index" >
                <el-image :src="item" fit="fill" class="image"></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import { Carousel, CarouselItem, Image } from 'element-ui';
export default {
 name: 'Carousel',
 data() {
     return {
        banner: [
            'https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/nameplate/mkz/mkz-2019/overview/billboard/MKZ-1440X720-KV-new.jpg',
            'https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/homepage/guoliu/desktop/guoliu-MKZ-d.jpg',
            'https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/nameplate/mkz/Overview1/mkz-1-2-billboard-carousel-1440x720.jpg'
        ]
     }
 },
 methods: {
 },
 components: {
    'el-carousel': Carousel,
    'el-carousel-item': CarouselItem,
    'el-image': Image
 }
}
</script>
<style lang="scss">
    .carouselBox{
      .carousel{
        width: 600px;
        height: 300px;
      }
    }
</style>
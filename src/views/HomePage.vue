<template>
  <div>
    <el-carousel height="150px" v-if="isShow">
      <el-carousel-item v-for="item in images" :key="item">
        <el-link :href="item.courseUrl" target="_blank">
          <el-image :src="item.imageUrl"></el-image>
        </el-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup>
import {ref, onMounted} from 'vue'
// import {getBanners} from "@/http/index";
import {getBanners2} from "@/http/index";

const images = ref();
const isShow = ref(false);
onMounted(async () => {
  // console.log(await getBanners())
  images.value = (await getBanners2()).data;
  isShow.value = true;
})
//
// images.value = [
//   {
//     "imageUrl": "/images/banners/21_birthday_banner_pc.jpg",
//     "courseUrl": "https://www.baidu.com"
//
//   }, {
//     "imageUrl": "/images/banners/21_brand_banner_pc.jpg",
//     "courseUrl": "https://www.baidu.com"
//
//   }, {
//     "imageUrl": "/images/banners/21_syz_banner_pc.jpg",
//     "courseUrl": "https://www.baidu.com"
//
//   }
// ]
</script>
<style lang="scss">
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__container {
  height: 480px !important;
  margin-top: 10px;
}

</style>

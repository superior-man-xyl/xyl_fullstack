<template>
  <van-swipe class="my-swiper" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in list" :key="index">
      <img :src="item.carouselUrl" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  setup() {},
};
</script>

<style lang="less" scoped>
.my-swiper {
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
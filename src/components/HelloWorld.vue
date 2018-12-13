<style scoped>
</style>
<template>
    <Carousel v-model="value1" loop>
      <CarouselItem>
        <div class="demo-carousel"> <img src="./img/1.jpg">
         </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"> <img src="./img/2.jpg">
          <img src="img/3.jpg">
         </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"> <img src="./img/4.jpg">
         </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"> <img src="./img/5.jpg"></div>
      </CarouselItem>
    </Carousel>
  </template>
<script>
export default {
  data () {
    return {
      value1: 0
    }
  }
}
</script>


<template>
  <div>
    <div v-for="book in books" :key="book.id" class="book-container">
      <div>Книга: {{ book.title }}</div>
      <div>Автор: {{ book.author }}</div>
      <div>Цена: {{ book.price }}</div>
      <div>Дата выпуска: {{ book.releaseDate }}</div>
    </div>
    <div class="coverflow-example">
      <swiper
        class="swiper"
        :modules="modules"
        :pagination="true"
        :effect="'coverflow'"
        :grab-cursor="true"
        :centered-slides="true"
        :slides-per-view="'auto'"
        :coverflow-effect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
      >
        <swiper-slide class="slide" v-for="index in 8" :key="index">
          slide
          <img :src="`/src/images/example/${index}.jpg`" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { width } from "dom7";
export default defineComponent ({
  name: "swiper-example-3d-coverflow",
  title: "3D Coverflow effect",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, EffectCoverflow],
    };
  },
  props: {
    books: {
      type: Array,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/@/styles/variables.scss";
@import "@/@/styles/mixins.scss";
@import "@/style.scss";

.book-container{
  width: 60%;
}

.red_messeng {
  font-family: "Shadows Into Light", cursive;
  font-size: 20px;
  color: red;
}

.coverflow-example {
   @include swiper-wrapper($height: 505px);
   position: relative;
}

.swiper {
  height: 100%;
  width: 100%;

  .slide {
    width: 300px;
    height: 450px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

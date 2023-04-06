<template>
  <div class="book-container">
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
        <swiper-slide class="slide" v-for="book in books" :key="book">
          slide
          <img :src="`/src/images/example/${book}.jpg`" />
          <div>
            <div>{{ book.title }}</div>
            <div class="div">
              <div>Автор: {{ book.author }}</div>
              <div>Цена: {{ book.price }}</div>
              <div>Дата выпуска: {{ book.releaseDate }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="button_zone">
      <my-button class="button">В корзину</my-button>
      <my-button class="button">Избранное</my-button>
      <my-button class="button">Отзывы</my-button>
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
export default defineComponent({
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

.book-container {
  width: 81%;
  border: 0px;
}

.red_messeng {
  font-family: "Shadows Into Light", cursive;
  font-size: 20px;
  color: red;
}
.div {
  background-color: white;
  font-size: 15px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.button_zone {
  display: flex;
  justify-content: space-between;
}
.button {
  border: 1px solid black;
  border-radius: 9px;
  padding: 7px 20px;
  font-size: 15px;
  margin-top: 13px;
}
.button:hover {
  border-radius: 5px;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.button:active {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.coverflow-example {
  @include swiper-wrapper($height: 580px);
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

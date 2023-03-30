<template>
  <div>
    <div v-for="book in books" :key="book.id" class="book-container">
      <div>Книга: {{ book.title }}</div>
      <div>Автор: {{ book.author }}</div>
      <div>Цена: {{ book.price }}</div>
      <div>Дата выпуска: {{ book.releaseDate }}</div>
    </div>
    <div v-if="books == ''" class="red_messeng">Нет результатов!</div>
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
          <img :src="`/images/example/${index}.jpg`" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
    },
  },
};
</script>

<style>
.red_messeng {
  font-family: "Shadows Into Light", cursive;
  font-size: 20px;
  color: red;
}
</style>

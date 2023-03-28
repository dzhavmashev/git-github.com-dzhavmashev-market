<template>
  <div>
    <div v-for="book in books" :key="book.id" class="book-container">
      <div>Книга: {{ book.title }}</div>
      <div>Автор: {{ book.author }}</div>
      <div>Цена: {{ book.price }}</div>
      <div>Дата выпуска: {{ book.releaseDate }}</div>
    </div>
    <div v-if="books == ''" class="red_messeng">Нет результатов!</div>
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

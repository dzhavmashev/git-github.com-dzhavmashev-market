<template>
  <div>
    <div v-for="book in books" :key="book.id" class="book-container">
      <div>Книга: {{ book.title }}</div>
      <div>Автор: {{ book.author }}</div>
      <div>Цена: {{ book.price }}</div>
      <div>Дата выпуска: {{ book.releaseDate }}</div>
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
</style>
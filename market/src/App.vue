<template>
  <div>
    <categories @sendGenre="makeFilter"></categories>
    <books v-bind:books="filterGenres" />
  </div>
</template>

<script>
import storage from "./storage.json";
import Categories from "./components/Categories.vue";
import Books from "./components/Books.vue";
export default {
  data() {
    return {
      choosenGenre: "",
      books: storage.books,
    };
  },
  components: {
    Categories,
    Books,
  },

  methods: {
    makeFilter(choosen) {
      this.choosenGenre = choosen;
    },
  },
  computed: {
    filterGenres() {
      if(this.choosenGenre){
      return this.books.filter((b) => b.code == this.choosenGenre);
      } else return this.books
    },
  },
};
</script>

<style>
.book-container {
  border: 2px solid black;
  margin: 10px;
}
</style>

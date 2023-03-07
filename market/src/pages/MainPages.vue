<template>
  <div>
    <div>MainPages</div>
    <div><categories @sendGenre="makeFilter"></categories>
    <books v-bind:books="filterGenres" />
    </div>
  </div>
</template>

<script>
import Storage from "../storage.json";
import Categories from "../components/Categories.vue";
import Books from "../components/Books.vue";

export default {
  data() {
    return {
      choosenGenre: "",
      books: Storage.books,
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
      if (this.choosenGenre) {
        return this.books.filter((b) => b.code == this.choosenGenre);
      } else return this.books;
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
    

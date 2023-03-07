<template>
  <div>
    <header-part></header-part>
    <div><categories @sendGenre="makeFilter"></categories>
    <books v-bind:books="filterGenres" />
    </div>
  </div>
</template>

<script>
import HeaderPart from "../components/HeaderPart.vue";
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
    HeaderPart,
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
#body {
  margin: 0;
},
.book-container {
  border: 2px solid black;
  margin: 10px;
}
</style>


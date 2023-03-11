<template>
  <div>
    <header-part></header-part>
    <div class="content">
      <categories @sendGenre="makeFilter"></categories>
      <div class="section">
        <center-part><books class="book-container" v-bind:books="filterGenres" /></center-part>  
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPart from "../components/HeaderPart.vue";
import Storage from "../storage.json";
import Categories from "../components/Categories.vue";
import Books from "../components/Books.vue";
import CenterPart from "../components/CenterPart.vue";
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
    CenterPart,
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
}

.book-container {
  border: 2px solid black;
  margin: 10px;
}

.content {
  display: flex;
}

.section {
  width: 60%;
  border: 1px solid #d7cfe7;
  background-color: #d7cfe7;
}
</style>

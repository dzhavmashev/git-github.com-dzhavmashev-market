<template>
  <div>
    <header-part></header-part>
    <div class="content">
      <categories @sendGenre="makeFilter"></categories>
      <div class="section">
        <center-part @searchFunc="getFilter"
          ><books class="book-container" v-bind:books="searchPost"
        /></center-part>
      </div>
    </div>
  </div>
</template>

<script>
import Storage from "../storage.json";
import Categories from "../components/Categories.vue";
import Books from "../components/Books.vue";
import CenterPart from "../components/CenterPart.vue";
export default {
  data() {
    return {
      choosenGenre: "",
      newValue: "",
      books: Storage.books,
    };
  },
  components: {
    Categories,
    Books,
    CenterPart,
  },

  methods: {
    makeFilter(choosen) {
      this.choosenGenre = choosen;
    },
    getFilter(newValue) {
      this.newValue = newValue;
      console.log(this.newValue);
    },
  },
  computed: {
    filterGenres() {
      if (this.choosenGenre) {
        return this.books.filter((b) => b.code == this.choosenGenre);
      } else return this.books;
    },
    searchPost() {
      const resultTitle = this.filterGenres.filter((books) =>
        books.title.toLowerCase().includes(this.newValue.toLowerCase())
      );
      const resultAuthor = this.filterGenres.filter((books) =>
        books.author.toLowerCase().includes(this.newValue.toLowerCase())
      );
      if (this.newValue) {
        return resultTitle;
      } else if (this.newValue != resultTitle) {
        return resultAuthor;
      } else {
        return this.filterGenres;
      }
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

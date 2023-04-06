<template>
  <div>
      <custom-modal v-bind:modal="modalVisible" @closeModal="closeModal">
          <auth-form
          v-if="regForm === false"
          @closeModal="closeModal"
          @openRegForm="openRegForm"
           @checkUser="checkUser" />
          <registr-form
          v-else
          @closeModal="closeModal"
          @openAuthForm="openAuthForm"
          @checkUser="checkUser" />
          </custom-modal>
    <header-part @openModal="openModal" @exitUser="exitUser" :showLogged='showLogged' :logged="logged"></header-part>
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
import AuthForm from "../components/AuthForm.vue";
import RegistrForm from "../components/RegistrForm.vue";
import CustomButton from "../components/UI/CustomButton.vue";
import CustomModal from "../components/UI/CustomModal.vue";
import CenterPart from "../components/CenterPart.vue";
export default {
  data() {
    return {
      navOpen: false,
      logged: false,
      showLogged: "",
      regForm: false,
      modalVisible: false,
      choosenGenre: "",
      books: Storage.books,
    };
  },
  components: {
    HeaderPart,
    Categories,
    Books,
    AuthForm,
    RegistrForm,
    CustomButton,
    CustomModal,
    CenterPart,
  },

  methods: {
    makeFilter(choosen) {
      this.choosenGenre = choosen;
    },
    openModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
      this.regForm = false;
    },
    openRegForm() {
      this.regForm = true;
    },
    openAuthForm() {
      this.regForm = false;
    },
    checkUser(email) {
      this.logged = true;
      this.showLogged = email;
    },
    exitUser(){
      this.logged = false;
    }
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

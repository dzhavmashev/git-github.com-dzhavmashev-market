<template>
  <div>
    <div>
      <my-button v-if="logged == false" @click ="openModal()">Войти</my-button>
      <my-button v-else @click="navOpen=!navOpen">{{showLogged}}</my-button>
      <nav v-show="navOpen">
        <ul>
          <li>Личный кабинет</li>
          <li>Выйти</li>
        </ul>
      </nav>
      <my-modal v-bind:modal="modalVisible" @closeModal="closeModal">
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
          </my-modal>
      <categories @sendGenre="makeFilter"></categories>
      <books v-bind:books="filterGenres" />
    </div>
  </div>
</template>

<script>
import Storage from "../storage.json";
import Categories from "../components/Categories.vue";
import Books from "../components/Books.vue";
import AuthForm from "../components/AuthForm.vue";
import RegistrForm from "../components/RegistrForm.vue";
import MyModal from "../components/UI/MyModal.vue";

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
    Categories,
    Books,
    AuthForm,
    RegistrForm,
    MyModal,
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
      this.showLogged = email
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
nav {
  background-color: white;
		width: 200px;
    border: 1px solid rgb(102, 100, 100);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
    cursor: pointer;
  }
</style>
    

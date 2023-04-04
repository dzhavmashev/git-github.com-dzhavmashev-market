<template>
  <div class="header">
    <div class="logo_part">
      <link-button>
        <router-link class="logo" to="/">Raritet</router-link>
      </link-button>
    </div>
    <div class="nav_bar">
      <link-button>
        <router-link class="nav_menu" to="/Adresses">Филиалы</router-link>
      </link-button>
      <link-button @click="funcShow">Номера
      </link-button>
        <modal-window :show="show" @clickClose="funcClose"></modal-window>
      <link-button>
        <router-link class="nav_menu" to="/">Соц.сети</router-link>
      </link-button>
      <link-button>
        <!-- <router-link class="mini_nav" to="/">Войти</router-link> -->
        <div>
          <custom-button v-if="logged == false" @click ="openModal()">Войти</custom-button>
          <custom-button class="user-button" v-else @click="navOpen=!navOpen">{{showLogged}}</custom-button>
          <nav class="navOpen" v-show="navOpen">
            <ul class="navOpen-list">
              <li class="navOpen-menu">Личный кабинет</li>
              <li @click="exitUser()" class="navOpen-menu">Выйти</li>
            </ul>
          </nav>
      </div>
      </link-button>
    </div>
  </div>
</template>

<script>
import CustomButton from './UI/CustomButton.vue';
export default {
  props: {
    logged: {
      type: Boolean,
    },
    showLogged: {
      type: String
    }
  },
  data() {
    return {
      show: false,
      navOpen: false,
    };
  },
  methods: {
    funcLinks() {
      this.$emit("update:getLink", false);
    },
    funcShow() {
      this.show = true;
    },
    funcClose() {
        this.show = false
    },
    openModal() {
      this.$emit("openModal", true);
    },
    exitUser() {
      this.navOpen = false
      this.$emit("exitUser", true);
    }
  },
  components: { 
    CustomButton, 
    },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d7cfe7;
  padding: 10px;
}

.logo {
  font-size: 50px;
  text-decoration: none;
  color: black;
}

.nav_bar {
  display: contents;
}
.nav_menu {
  text-decoration: none;
  color: black;
}
.navOpen {
  background-color: white;
  border: 1px solid thistle;
  width: 151px;
  position: absolute;
  top: 75px;
  right: 11px;
  z-index: 99;
}
.navOpen-list {
  margin: 0;
  padding: 0;
}
.navOpen-menu {
  list-style: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 50px;
  border-bottom: 1px solid #d7cfe7;
}
.navOpen-menu:hover {
  background-color: #d7cfe7;
  color: white;
  transition: 100ms;
}

.user-button {
  background-color:#d7cfe7;
  width: 150px;
  text-align: center;
}
.user-button:hover {
  background-color: #d7cfe7;
  color: white;
}
</style>

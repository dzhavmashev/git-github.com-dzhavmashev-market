<template>
  <div class="header">
    <div class="logo_part">
      <link-button>
        <router-link class="logo" to="/">Raritet</router-link>
      </link-button>
    </div>
    <div class="nav_bar">
      <link-button>
        <router-link class="nav_menu" to="/">Филиалы</router-link>
      </link-button>
      <link-button @click="funcShow">Номера
      </link-button>
        <modal-window :show="show" @clickClose="funcClose"></modal-window>
      <link-button>
        <router-link class="nav_menu" to="/">Соц.сети</router-link>
      </link-button>
      <link-button>
        <router-link class="mini_nav" to="/">Войти</router-link>
      </link-button>
      <div>
        <custom-button v-if="logged == false" @click ="openModal()">Войти</custom-button>
        <custom-button v-else @click="navOpen=!navOpen">{{showLogged}}</custom-button>
        <nav v-show="navOpen">
        <ul>
          <li>Личный кабинет</li>
          <li>Выйти</li>
        </ul>
      </nav>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
  methods: {
    funcShow() {
      this.show = true;
    },
    funcClose() {
        this.show = false
    },
    openModal() {
      this.$emit("openModal", true);
    },
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d7cfe7;
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

.mini_nav {
  text-decoration: none;
  font-size: 15px;
  color: black;
}
</style>

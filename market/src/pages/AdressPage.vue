<template>
  <div class="intro_content">
    <div>
      <header-part>
        <link-button
          ><router-link class="nav_menu" to="/">На главную</router-link>
        </link-button>
      </header-part>
    </div>
    <div class="content">
      <img class="uzors" src="69df977a72edb99ca578a44592bffc3d.jpg" alt="" />
      <div class="display">
        <div v-for="shop in shops" :key="shop.id" class="content_branches">
          <div class="adressAndContact">
            <div class="adress">
              <img src="period.png" />
              {{ shop.address }}
            </div>
            <div class="contact">Телефон: {{ shop.phone }}</div>
          </div>
          <div class="mode_con">
            <div class="mode">
              <img src="period.png" />
              {{ shop.time }}
            </div>
          </div>
        </div>
      </div>
      <img class="uzors" src="69df977a72edb99ca578a44592bffc3d.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import Storage from "../storage.json";
export default {
  data() {
    return {
      shops: Storage.shops,
    };
  },
  methods: {},
};
</script>

<style>
.display {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content_branches {
  display: inherit;
  justify-content: center;
  padding: 10px;
}
.adressAndContact {
  width: 53%;
}
.adress {
  font-family: cursive;
  font-size: 20px;
}
.contact {
  font-family: cursive;
  font-size: 20px;
}

.uzors {
  height: 827px;
  width: 426px;
}
.uzors:last-child {
  transform: scale(-1, 1);
}

.mode_con {
  width: 48%;
}
.mode {
  font-family: cursive;
  font-size: 20px;
}
</style>

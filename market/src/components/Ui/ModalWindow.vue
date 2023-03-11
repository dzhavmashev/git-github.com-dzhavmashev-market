<template>
  <div class="parent" v-if="show" @click="getWindow">
    <div @click.stop class="child">
      <div class="info_div">Контакты</div>
      <div class="icon">
        <img src="telegram.png" />
        <img src="whatsapp.png" />
      </div>
      <my-button @click="clickClose">Закрыть</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-window",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getWindow() {
      this.$emit("update:show", false);
    },
    clickClose() {
      this.$emit("clickClose");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");
.info_div {
  font-family: "Shadows Into Light", cursive;
  font-size: 22px;
}
.parent {
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
}

.child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  min-height: 100px;
  min-width: 300px;
  margin: auto;
  border-radius: 6px;
  padding: 20px;
}
</style>

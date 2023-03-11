<template>
  <div class="left_part">
    <div class="bar">Жанры:</div>
    <my-button
      class="btn_catg"
      v-for="genre in genres"
      :key="genre.id"
      @click="sendGenre(genre)"
    >
      <img src="period.png" /> {{ genre.name }}:
    </my-button>
  </div>
</template>

<script>
import Storage from "../storage.json";
export default {
  data() {
    return {
      genres: Storage.genres,
      choosen: "",
    };
  },
  methods: {
    sendGenre(genre) {
      this.choosen = genre.code;
      this.$emit("sendGenre", this.choosen);
    },
  },
};
</script>

<style>
.left_part {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20%;
}

.bar {
  font-family: "Shadows Into Light", cursive;
  font-size: 28px;
}

.btn_catg {
  display: flex;
  align-items: center;
  border: 0px solid white;
  font-size: 20px;
}
</style>

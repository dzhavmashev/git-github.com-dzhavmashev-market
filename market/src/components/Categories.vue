<template>
  <div>
    <my-button
      v-for="genre in genres"
      :key="genre.id"
      @click="sendGenre(genre)">
      {{ genre.name }}
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
</style>
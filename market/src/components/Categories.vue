<template>
  <div>
    <custom-button
      v-for="genre in genres"
      :key="genre.id"
      @click="sendGenre(genre)">
      {{ genre.name }}
    </custom-button>
  </div>
</template>

<script>
import Storage from "../storage.json";
import CustomButton from './UI/CustomButton.vue';
export default {
  components: { CustomButton },
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
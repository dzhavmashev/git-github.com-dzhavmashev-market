<template>
    <button class="my_btn">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");

.my_btn {
  padding: 0;
  font-family: "Shadows Into Light", cursive;
  cursor: pointer;
}
</style>

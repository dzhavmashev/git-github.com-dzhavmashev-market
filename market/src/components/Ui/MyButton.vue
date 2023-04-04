<template>
  <div>
    <button class="my_btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");
.my_btn {
  border: 1px solid black;
  padding: 0;
  font-family: "Shadows Into Light", cursive;
  cursor: pointer;
}
</style>

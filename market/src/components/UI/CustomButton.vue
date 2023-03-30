<template>
  <div>
    <button class="my_button">
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
.my_button {
  border: 1px solid black;
  padding: 0;
  font-family: "Shadows Into Light", cursive;
  background-color: transparent;
  width: 180px;
  height: 50px;
  padding: 5px;
  font-size: 16px;
  margin: 2px;
  border: none;
  cursor: pointer;
}
.my-button:hover {
  color: white;
  background-color: thistle;
}
</style>

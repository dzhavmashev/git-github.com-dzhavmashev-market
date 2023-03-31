<template>
    <button class="custom-button">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: "custom-button",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");
.custom-button {
  border: 1px solid black;
  padding: 0;
  font-family: "Shadows Into Light", cursive;
  background-color: transparent;
  width: 100%;
  text-align: left;
  height: 50px;
  padding: 5px;
  font-size: 18px;
  margin: 2px;
  border: none;
  cursor: pointer;
}
.custom-button:hover {
  color: white;
  background-color: #d7cfe7;
  transition: 100ms;
}
</style>

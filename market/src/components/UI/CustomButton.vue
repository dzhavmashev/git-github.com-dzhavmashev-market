<template>
  <div>
    <button class="my-button">
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
.my-button {
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

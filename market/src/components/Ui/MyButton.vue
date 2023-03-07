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
  width: 180px;
  height: 50px;
  padding: 5px;
  font-size: 16px;
  margin: 2px;
  border: none;
  cursor: pointer;
    
}
</style>

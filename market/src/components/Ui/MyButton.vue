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
.my_btn {
    padding: 5px;
    border: 1px solid black;
    
}
</style>

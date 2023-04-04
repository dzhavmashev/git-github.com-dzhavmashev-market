<template>
  <div class="placeholder-form">
    <div class="placeholder-container">
      <input
        v-model="newValue"
        v-on:change="$emit('input', $event.target.value)"
        placeholder=""
        class="input_items"
        type="text"
      />
      <label>Поиск товара</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-input",
  data() {
    return {
      newValue: "",
    };
  }
  }
</script>

<style>
.placeholder-form {
  box-sizing: border-box;
}
.placeholder-container {
  position: relative;
    box-sizing: border-box;
}
.placeholder-container {
    position: relative;
}
.placeholder-container input {
  border: 1px solid black;
  border-right: #fff;
  background-color: #fff;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 16px;
  height: 38px;
  outline: 0;
  padding: 0 20px;
  width: 100%;
}
.placeholder-container label {
  color: grey;
  font-family: "Shadows Into Light", cursive;
  background-color: #fff;
  font-size: 14px;
  line-height: 14px;
  padding: 3px 5px;
  position: absolute;
  top: 8px;
  left: 10px;
  transition: all 270ms;
  background-color: #fff;
}
.placeholder-container input:focus + label,
.placeholder-container input:placeholder-shown + label {
  background-color: 0.1;
  top: -10px;
  left: 10px;
  font-size: 11px;
  padding: 2px 10px;
}
.placeholder-container input {
  width: 40vw;
}
</style>

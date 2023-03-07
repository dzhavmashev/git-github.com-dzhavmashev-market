<template>
    <div>
      <button class="btn">
        <slot></slot>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "link-button",
  };
  </script>
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");
  .btn {
    border: 0px solid black;
    padding: 0;
    font-family: "Shadows Into Light", cursive;
    background-color: #d7cfe7;
    font-size: 22px;
    cursor: pointer;
  }
  </style>
  
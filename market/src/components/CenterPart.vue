<template>
  <div class="center">
    <div class="input_zone">
      <my-input type="text" @input="consLog" />
      <my-button class="search_btn"
        ><img class="img_search" src="search.png" @click="findFunc"/>Искать</my-button
      >
      <my-button class="filter_btn"><img src="funnel.png" /></my-button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newValue: "",
    };
  },
  methods: {
    findFunc() {
      console.log(this.newValue);
    },
    consLog(newValue) {     // без последнего символа (удаляет последний символ при отправке)
      if (newValue.data != null) {
        this.newValue += newValue.data;
      } else {
        this.newValue = this.newValue.slice(0, -1);
      }
      this.$emit("searchFunc", this.newValue);
    },
  },
};
</script>

<style>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d7cfe7;
}

.input_zone {
  display: flex;
}

.search_btn {
  display: flex;
  align-items: center;
  border: 0px solid blue;
  color: white;
  background-color: blue;
  height: 38px;
}
.filter_btn {
  border: 1px solid black;
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 0px;
  height: 38px;
}

.img_search {
  filter: invert(1);
}
</style>

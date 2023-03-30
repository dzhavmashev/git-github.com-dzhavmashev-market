<template>
  <div class="center">
    <div class="input_zone">
      <my-input type="text" @input="consLog" />
      <my-button @click="findFunc" class="search_btn"
        ><img class="img_search" src="search.png" />Искать</my-button
      >
      <my-button class="filter_btn"><img src="funnel.png" /></my-button>
    </div>
    <slot></slot>
    <div class="button_zone">
      <my-button class="button">В корзину</my-button>
      <my-button class="button">Избранное</my-button>
      <my-button class="button">Отзывы</my-button>
    </div>
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
.button_zone {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
.button {
  border: 1px solid black;
  border-radius: 5px;
  padding: 7px 20px;
  font-size: 15px;
}
.button:hover {
  border-radius: 0px;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.button:active {
  transform: translateX(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
</style>

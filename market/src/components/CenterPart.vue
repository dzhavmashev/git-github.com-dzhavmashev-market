<template>
  <div class="center">
    <div class="input_zone">
      <my-input type="text" @input="consLog" />
      <my-button class="search_btn"
        ><img class="img_search" src="search.png" />Искать</my-button
      >
      <my-button class="filter_btn"><img src="funnel.png" /></my-button>
    </div>
    <slot> </slot>
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
    consLog(newValue) {
      if (newValue.data != null) {
        this.newValue += newValue.data;
      } else {
        this.newValue = this.newValue.slice(0, -1);
      }
      console.log(this.newValue);
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
  padding: 4px 7px 0px 7px;
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 0px;
  height: 37px;
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
  border-radius: 9px;
  padding: 7px 20px;
  font-size: 15px;
}
.button:hover {
  border-radius: 5px;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.button:active {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
</style>

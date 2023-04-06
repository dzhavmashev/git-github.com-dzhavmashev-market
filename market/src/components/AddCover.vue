<template>
  <div class="par">
    <div v-for="book in books" :key="book" class="my">
      <div class="img">
        <img
          class="cover"
          src="https://avatars.dzeninfra.ru/get-zen_doc/1708012/pub_5e5e77c2170e395c41043f49_5e5e8290ac9a236dd3d946dd/scale_1200"
        />
      </div>
      <h1 class="h1">{{ book.title }}</h1>
      <div class="h2">
        <div>Автор: {{ book.author }}</div>
        <div>Цена: {{ book.price }}</div>
        <div>Дата выпуска: {{ book.releaseDate }}</div>
      </div>
      <div class="buttons">
        <my-button class="btns">В корзину</my-button>
        <my-button class="btns">В избранное</my-button>
        <my-button class="btns">Отзывы</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import Storage from "../storage.json";
export default {
  data() {
    return {
      books: Storage.books,
    };
  },
};
</script>

<style>
.cover {
  width: 20vw;
}
.my {
  font-family: Shadow into light;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.h1 {
  font-size: 18px;
}
.h2,
.h1,
.img {
  font-family: Shadow into light;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.h2 {
  font-size: 17px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 20%;
}
.buttons {
  display: flex;
  justify-content: center;
  justify-content: space-between;
}
.btns {
  border: 1px solid black;
  border-radius: 9px;
  padding: 7px 20px;
  font-size: 15px;
  margin-top: 13px;
}
</style>

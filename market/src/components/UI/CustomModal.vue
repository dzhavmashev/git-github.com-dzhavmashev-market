<template>
  <div class="parent" v-if="modal" @click="closeModal()">
    <div @click.stop class="child">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
  },
};
</script>

<style>
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.726);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 98;
}
.child {
  font-size: 18px;
  padding: 15px 10px 45px;
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  border: 1px solid rgb(102, 100, 100);
  width: 400px;
  min-height: 350px;
}
</style>
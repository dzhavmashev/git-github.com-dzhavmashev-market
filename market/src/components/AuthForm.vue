<template>
  <div class="auth-form">
    <h1 class="header-name">Raritet</h1>
    <input
      v-model="email"
      type="email"
      class="auth-input"
      placeholder="Почта"
      required="required"
      autocomplete="username email"
    />
    <input
      v-model="password"
      type="password"
      class="auth-input"
      placeholder="Пароль"
      required="required"
      autocomplete="current-password"
    />
    <p class="input-message" v-if="wrongUser">Пользователь не найден</p>
    <p class="input-message" v-if="wrongInput">Заполните все поля</p>
    <button class="continue-button" @click="enterUser()">Войти</button>
    <div>
      <span>Ещё не зарегистрированы? </span>
      <span class="back-button" @click="openRegForm()">Регистрация</span>
    </div>
    <button class="close-button" @click="closeModal()">
      <img class="close-img" src="../images/close.png" alt="close button" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: false,
      wrongInput: false,
      wrongUser: false,
      email: "",
      password: "",
      usersData: [],
    };
  },
  mounted() {
    if (localStorage.getItem("usersList")) {
      this.usersData = JSON.parse(localStorage.getItem("usersList"));
    }
  },
  methods: {
    enterUser() {
      let users = this.usersData;
      let mail = this.email;
      let password = this.MD5(this.password);
      if (this.email == "" || this.password == "") {
        this.wrongInput = true;
      } else {
        this.wrongInput = false;
        if (users.length !== 0) {
          for (let i = 0; i < users.length; i++) {
            if (users[i].email == mail && users[i].password == password) {
              this.$emit("checkUser", mail);
              this.closeModal()
            } else this.wrongUser = true;
          }
        } else this.wrongUser = true
      }
    },
    MD5(d) {
      for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)
        (_ = d.charCodeAt(r)),
          (f += m.charAt((_ >>> 4) & 15) + m.charAt(15 & _));
      return f;
    },
    closeModal() {
      this.$emit("closeModal", false);
    },
    openRegForm() {
      this.$emit("openRegForm", true);
    },
  },
};
</script>

<style>
h1 {
  margin-top: 40px;
}
.auth-form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
.auth-input {
  height: 30px;
  border-radius: 10px;
  padding: 8px;
  font-size: 18px;
  border: 2px solid grey;
}

.auth-input:focus {
  outline: 4px solid thistle;
}
.close-button {
  position: absolute;
  right: 0px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 10px 10px 6px;
  background-color: transparent;
}
.close-button:hover {
  background-color: thistle;
}
.continue-button {
  background-color: rgb(180, 155, 180);
  color: white;
  font-family: "Shadows Into Light", cursive;
  border-radius: 25px;
  width: 240px;
  height: 40px;
  padding: 5px;
  font-size: 18px;
  margin-top: 15px;
  border: none;
  cursor: pointer;
}
.continue-button:hover {
  background-color: rgb(154, 118, 154);
}
.close-img {
  width: 20px;
  height: 20px;
}
span {
  font-size: 16px;
}
.back-button {
  cursor: pointer;
  font-weight: 600;
}
</style>
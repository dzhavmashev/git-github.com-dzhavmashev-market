<template>
  <div class="registr-form">
    <h1 class="header-name">Raritet</h1>
    <input
      v-model="email"
      type="email"
      class="registr-input"
      placeholder="Почта"
      required="required"
      autocomplete="username email"
    />
    <p class="input-message" v-if="wrongEmail">
      Почтовый адрес уже используется
    </p>
    <p class="input-message" v-if="notValidMail == true && wrongInput == false">
      Неверный почтовый адрес
    </p>
    <input
      v-model="age"
      type="number"
      class="registr-input"
      placeholder="Возраст"
      required="required"
      autocomplete="user age"
    />
    <p class="input-message" v-if="wrongAge">
      Возрастное ограничение <b>18+</b>
    </p>
    <input
      v-model="password"
      type="password"
      class="registr-input"
      placeholder="Пароль"
      required="required"
      autocomplete="current-password"
    />
    <p class="input-message" v-if="wrongPassword">
      Пароль должен состоять минимум из <b>6</b> символов
    </p>
    <p class="input-message" v-if="wrongInput">Заполните все поля</p>
    <button class="continue-button" @click="addUser()">Продолжить</button>
    <div>
      <span>Уже зарегистрировались? </span
      ><span class="back-button" @click="openAuthForm()">Войти</span>
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
      wrongEmail: false,
      wrongAge: false,
      wrongPassword: false,
      wrongInput: false,
      notValidMail: false,
      usersData: [],
      user: {},
      email: "",
      age: "",
      password: "",
    };
  },
  mounted() {
    if (localStorage.getItem("usersList")) {
      try {
        this.usersData = JSON.parse(localStorage.getItem("usersList"));
      } catch (e) {
        this.usersData = [];
      }
    }
  },
  methods: {
    addUser() {
      let mail = this.email;
      let users = this.usersData;
      if (this.email == "" || this.age == "" || this.password == "") {
        this.wrongInput = true;
      } else this.wrongInput = false;
      if (users.length !== 0) {
        for (let i = 0; i < users.length; i++) {
          if (users[i].email == mail) {
            this.wrongEmail = true;
          } else this.wrongEmail = false;
        }
      }
      if (this.age.length !== 0 && this.age < 18) {
        this.wrongAge = true;
      } else this.wrongAge = false;
      if (this.password.length !== 0 && this.password.length < 6) {
        this.wrongPassword = true;
      } else this.wrongPassword = false;
      if (!this.validEmail(mail)) {
        this.notValidMail = true
      } else this.notValidMail = false;
      if (
        this.wrongAge == false &&
        this.wrongEmail == false &&
        this.wrongInput == false &&
        this.wrongPassword == false &&
        this.notValidMail == false
      ) {
        this.user = {
          email: this.email,
          age: this.age,
          password: this.MD5(this.password),
        };
        this.usersData.push(this.user);
        localStorage.setItem("usersList", JSON.stringify(this.usersData));
        this.$emit("checkUser", mail);
        this.closeModal();
      }
    },
    MD5(d) {
      for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)
        (_ = d.charCodeAt(r)),
          (f += m.charAt((_ >>> 4) & 15) + m.charAt(15 & _));
      return f;
    },
    openAuthForm() {
      this.$emit("openAuthForm", true);
    },
    closeModal() {
      this.$emit("closeModal", false);
    },
     validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
};
</script>

<style>
.header-name {
  margin-top: 40px;
}
.input-message {
  font-size: 16px;
  margin: 0;
  width: 250px;
  text-align: center;
}
.registr-form {
  gap: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.registr-input {
  height: 30px;
  border-radius: 10px;
  padding: 8px;
  font-size: 18px;
  border: 2px solid grey;
}

.registr-input:focus {
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
b {
  font-size: 20px;
}
.back-button {
  cursor: pointer;
  font-weight: 600;
}
.back-button:hover {
  text-decoration: underline;
}
</style>
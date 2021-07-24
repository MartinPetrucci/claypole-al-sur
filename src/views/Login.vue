<template>
  <div @keyup.enter="key()">
    <v-container class="purple darken-4 container-login" text-center>
      <v-row>
        <v-col>
          <v-row align="center" justify="center" style="margin-top: 2em">
            <h1 class="white--text mx-1" style="font-size: 5vw">
              Claypole al Sur
            </h1>
            <v-icon
              class="white--text mx-1"
              style="font-size: 5vw; margin-top: 0.2em"
              >mdi-image-filter-hdr</v-icon
            >
          </v-row>
        </v-col>
      </v-row>
      <v-row style="margin-top: 3em; margin-bottom: 2em">
        <v-col>
          <v-row>
            <v-text-field
              placeholder="Username"
              outlined
              background-color="rgb(255, 255, 255, 0.97)"
              color="purple darken-4"
              v-model="username"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              filled
              placeholder="Password"
              outlined
              background-color="rgb(255, 255, 255, 0.97)"
              color="purple darken-4"
              type="password"
              v-model="password"
              
            ></v-text-field>
          </v-row>
          <v-row style="float: right; margin-right: 14%;">
            <v-btn id="login" @click="login">Login</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.username === "martin" && this.password === "123"
        ? this.$router.push("/")
        : alert("Usuario o contraseña incorrectos");
    },
    key() {
      this.login();
    }
  },
};
</script>

<style>
/* .bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("../assets/images/background-mountain.jpg") no-repeat center
    center;
  background-size: cover;
  opacity: 0.82;
} */

.v-application .purple.darken-4 {
  border-color: white !important;
}

.container-login {
  margin: 0;
  padding: 0;
  min-height: 70%;
  max-width: 70%;
  position: absolute;
  top: 15%;
  left: 15%;
  border-style: solid;
  border-width: 3px;
  border-radius: 5%;
  opacity: 0.9;
}

.v-text-field > .v-input__control > .v-input__slot {
  width: 70%;
  position: relative;
  left: 15%;
}

#login {
  color: #4a148c;
}
</style>

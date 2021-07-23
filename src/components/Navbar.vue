<template>
  <div>
    <v-app-bar app color="purple darken-4" v-if="!isLogin">
      <!-- <v-icon class="white--text ml-3">
          mdi-menu
      </v-icon> -->
      <v-app-bar-nav-icon
        @click="clickDrawer"
        class="white--text"
        style="font-size: larger"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-btn text @click="goHome" style="position: absolute; left: 35%">
          <h1 class="white--text mx-1" style="font-size: 2vw">
            Claypole al Sur
          </h1>
          <v-icon
            class="white--text mx-1"
            style="font-size: 2vw; margin-top: 0.3em"
            >mdi-image-filter-hdr</v-icon
          >
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn text @click="logOut">
        <p class="mb-0 white--text" style="font-size: 1vw">Log out</p>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" color="purple darken-4" temporary>
      <v-container class="mt-5">
        <v-row align="center" justify="center">
          <v-avatar>
            <img
              style="
                border-style: solid;
                border-width: 2px;
                border-color: white;
              "
              src="https://randomuser.me/api/portraits/men/59.jpg"
              alt=""
            />
          </v-avatar>
        </v-row>
        <v-row justify="center" class="mt-5">
          <p class="white--text" style="font-size: 20px">Bienvenido, Martín</p>
        </v-row>
      </v-container>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Alojamiento", icon: "mdi-home-group", link: "/alojamiento" },
        { title: "Transporte", icon: "mdi-airplane",link:"/transporte" },
        { title: "Excursiones", icon: "mdi-image-filter-hdr",link:"/excursiones" },
        { title: "Inventario", icon: "mdi-bag-personal",link:"/inventario" },
        { title: "Playlist", icon: "mdi-playlist-music",link:"/playlist" },

      ],
    };
  },
  computed: {
    isLogin() {
      return this.$route.path === "/login";
    },
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    logOut() {
      this.$router.push("/login");
    },
    clickDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
<style scoped>
.v-avatar {
  width: 70px !important;
  height: 70px !important;
  max-width: 70px !important;
}
</style>
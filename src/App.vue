<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>
<style>
.v-main {
  background: url("./assets/images/background-mountain.jpg") no-repeat center
    center;
  background-size: cover;
  opacity: 0.82;
}
  
</style>




<template>
  <v-container style="background-color: red; height: 100%">
    <v-row>
      <v-col cols="12">
        <h1 style="font-size: 55px" class="my-4 ml-15 pl-5 white--text">
          Alojamiento
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-container class="mx-15 mt-0 pt-0 px-10" style="background-color: blue">
        <v-row>
          <v-col>
            <v-row><h1>{{ alojamiento.name }}</h1></v-row>
            <v-row><h2>{{ alojamiento.location }}</h2></v-row>
            <v-row><h2>{{ alojamiento.pricePerPerson }}</h2></v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row v-for="(value, key) in alojamiento.features" :key="key">
              <p>{{ key }}: <v-icon>mdi-{{icon(value)}}</v-icon></p>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Alojamiento-detalle",
  data() {
    return {
      alojamiento: {},
      id: { value: "0", type: String },
    };
  },
  computed: {
    icon() {
      return value => value ? "check-outline" : "close-outline";
    }
  },
  created() {
    this.id = this.$route.params.id;
    console.log(typeof this.id);
    //console.log(this.$store.getters.getAlojamientos())
    console.log(this.$store.getters.getAlojamientoById(this.id));
    this.alojamiento = this.$store.getters.getAlojamientoById(this.id);
    console.log("alojamiento: ", this.alojamiento);
    //this.$store.getters.getAlojamiento(this.$route.params.id);
  },
};
</script>

<style>
</style>
<template>
  <v-container style="background-color: transparent; height: 100%">
    <v-row>
      <v-col md="12">
        <h1 style="font-size: 55px" class="my-4 mx-15 white--text">Alojamiento</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-container class="mx-15 mt-0 pt-0 px-10" style="background-color: transparent">
        <v-row>
          <v-tabs v-model="tab" background-color="transparent" slider-color="purple darken-4"
          color="white" class="tabs"
          >
            <v-tab style="font-size: 20px"> Propuestas </v-tab>
            <v-tab style="font-size: 20px"> Agregar </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab" background-color="red">
            <v-tab-item>
              <v-container style="background: rgba(74, 20, 140, 0.4);">
                <v-row wrap>
                  <v-col
                    cols="12"
                    v-for="n in 5"
                    :key="n"
                  >
                    <AlojamientoCard :alojamiento="alojamiento"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item>
              <v-container style="background-color: transparent;">
                <v-row>
                  <v-col cols="12">
                    <h1>Agregar</h1>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs-items>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import AlojamientoCard from "@/components/AlojamientoCard.vue"

export default {
  name: "Alojamiento",
  components: {
      AlojamientoCard
  },
  data() {
    return {
      tab: null,
      alojamiento: {
          title: "Cabañas pepito",
          location: "Villa la Angostura, calle 31",
          img: "../assets/images/cabaña.jpg",
          precio: "$1300"
      },
      propuestas: [
        { name: "Cabañas pepito" },
        { name: "Cabañas pepito" },
        { name: "Cabañas pepito" },
        { name: "Cabañas pepito" },
        { name: "Cabañas pepito" },
        { name: "Cabañas pepito" },
        { name: "Cabañas pepito" },
      ],
    };
  },
};
</script>

<style scoped>
.tabs {
    background-color: transparent important!;
}
</style>
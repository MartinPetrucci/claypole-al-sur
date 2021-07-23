<template>
  <v-card color="#713eaf" dark>
    <!-- <v-container class="d-flex flex-no-wrap justify-space-between"> -->
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-avatar class="ma-2" size="135" tile>
            <v-img src="../assets/images/cabaña.jpg"> </v-img>
          </v-avatar>
        </v-col>
        <v-col cols="9">
          <v-card-title
            class="text-h4 mb-2"
            v-text="alojamiento.title"
          ></v-card-title>
          <v-card-subtitle>
            <v-icon style="font-size: 20px">mdi-map-marker</v-icon>
            {{ alojamiento.location }}
          </v-card-subtitle>
          <p class="pl-4">Precio por persona: {{ alojamiento.precio }}</p>
        </v-col>
        <v-col cols="1">
          <v-row class="mt-1">
            <v-col>
              <p
                class="mx-1 pt-1"
                style="display: inline-block; font-size: 20px"
              >
                5
              </p>
              <v-icon class="mx-1 mb-1" style="font-size: 20px">
                mdi-heart
              </v-icon>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p
                class="mx-1 pt-1"
                style="display: inline-block; font-size: 20px"
              >
                5
              </p>
              <v-icon class="mx-1 mb-1" style="font-size: 20px">
                mdi-comment
              </v-icon>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "AlojamientoCard",
  props: {
    alojamiento: Object,
  },
  data() {
    return {
      item: {
        color: "#4a148c",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
    };
  },
};
</script>

<style>
</style>
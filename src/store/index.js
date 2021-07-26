import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alojamientos: [
      {
        id: "1",
        name: "Cabañas pepito",
        location: "Villa la Angostura",
        pricePerPerson: "1200",
        features: {
          wifi: true,
          petFriendly: false,
          kitchen: true,
          garage: true
        }
      },
      {
        id: "2",
        name: "Cabañas jorge",
        location: "Bariloche",
        pricePerPerson: "1500",
        features: {
          wifi: true,
          petFriendly: true,
          kitchen: true,
          garage: true
        }
      },
      {
        id: "3",
        name: "Cabañas ricardo",
        location: "San Martín de los Andes",
        pricePerPerson: "2000",
        features: {
          wifi: true,
          petFriendly: true,
          kitchen: true,
          garage: true
        }
      }
    ]
  },
  getters: {
    getAlojamientos: state => () => {
      return state.alojamientos;
    },
    getAlojamientoById: (state, getters) => (id) => {
      getters.getAlojamientos().forEach(alojamiento => {
        console.log('id param: ',id)
        console.log("Id bool: ", alojamiento.id === id);
      });
      return getters
        .getAlojamientos()
        .filter(alojamiento => alojamiento.id === id)[0];
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});

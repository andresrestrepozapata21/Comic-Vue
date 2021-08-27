import Vue from 'vue'
import Vuex from 'vuex'
import ApiComic from '../api/apiComic.js'

const apiComic = new ApiComic();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comics: [],
    calificacion: 0,
    safeComics: [],
    auxiliarStar: null,
    hoverStars: null,
  },
  mutations: {
    setComics( state, comicsActions ){
      state.comics = comicsActions
    },
    setCalificacion ( state, calif ){
      state.calificacion = calif
    },
    setAuxiliarStar( state, a ){
      state.auxiliarStar = a
    },
    setHoverStars (state, h){
      state.hoverStars = h
    },
  },
  actions: {
    getComics({ commit }) {
      let idRamdom = Math.round(Math.random() * (2000 - 1) + 1);
      apiComic.getComic(idRamdom).then((res) => {
        commit('setComics', res);
      })
    },
  },
  modules: {
  }
})

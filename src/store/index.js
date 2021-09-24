import Vue from 'vue'
import Vuex from 'vuex'
import ApiComic from '../api/apiComic.js'

const apiComic = new ApiComic();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comics: [],
    qualification: 0,
    safeComics: [],
    referentAssistantStar: null,
    maxiumStars: 5,
    comicForEdit: [],
  },
  mutations: {
    setComics( state, comics ){
      state.comics = comics
    },
    setQualification ( state, qualification ){
      state.qualification = qualification
    },
    setReferentAssistantStar( state, referentAssistantStar ){
      state.referentAssistantStar = referentAssistantStar
    },
    setComicForEdit(state, comicForEdit){
      state.comicForEdit = comicForEdit
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

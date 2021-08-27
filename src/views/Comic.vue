<template>
  <div>
    <ApiURL />
    <StarRading />
    <button @click="saveComic">Calificar</button>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiURL from "../components/ApiURL.vue";
import StarRading from "../components/StarRading.vue";
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: "Comic",
  methods: {
    saveComic(){
      let aux = this.comics;
      aux['calificacion'] = this.calificacion;
      this.safeComics.push(aux);
      this.getComics();
      for(let j = 0; j <= 4; j++){
        this.auxiliarStar[j].classList.remove('active')
      }
      this.setCalificacion(0)
    },
     ...mapActions([ 'getComics' ]),
     ...mapMutations([ 'setCalificacion' ])
  },
  computed:{
    ...mapState([ 'comics', 'calificacion', 'safeComics', 'auxiliarStar' ])
  },
  
  components: {
    ApiURL,
    StarRading,
  },
};
</script>

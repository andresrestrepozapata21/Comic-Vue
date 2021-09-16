<template>
  <div>
    <ShowingComic />
    <StarRading />
    <button @click="saveComic">Calificar</button>
  </div>
</template>

<script>
import ShowingComic from "../components/ShowingComic.vue";
import StarRading from "../components/StarRading.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "Comic",
  methods: {
    saveComic() {
      if(this.qualification === 0){
        return console.log("no puede guardar un comic no calificado")
      }
      let comicAssistant = this.comics;
      comicAssistant["qualification"] = this.qualification;
      this.safeComics.push(comicAssistant);
      this.setQualification(0);
      this.unpaintStars();
      this.getComics();
    },
    unpaintStars(){
      for (let j = 0; j <= this.maxiumStars-1; j++) {
        this.starAssistant[j].classList.remove("active");
      }
    },
    ...mapActions(["getComics"]),
    ...mapMutations(["setQualification"]),
  },
  computed: {
    ...mapState(["comics", "qualification", "safeComics", "starAssistant", "maxiumStars"]),
  },

  components: {
    ShowingComic,
    StarRading,
  },
};
</script>

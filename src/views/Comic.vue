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
import toastr from 'toastr'
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "Comic",
  computed: {
    ...mapState(["comics","qualification","safeComics","referentAssistantStar","maxiumStars",]),
  },
  methods: {
    saveComic() {
      if (this.qualification === 0) {
        // User Notification
        return toastr.error('No has seleccionado la calificación que le quieres das a este Comic.')
      }
      
      this.safeComic();

      // user Notification
      toastr.success('Se ha guardado la calificación satisfactoriamente\n' + 'puedes ver los detalles en el modulo "Calificados".')

      this.setQualification(0);
      this.unpaintStars();
      this.getComics();
    },
    unpaintStars() {
      for (let j = 0; j <= this.maxiumStars - 1; j++) {
        this.referentAssistantStar[j].classList.remove("active");
      }
    },
    safeComic(){
      let comicAssistant = this.comics;
      comicAssistant["qualification"] = this.qualification;
      this.safeComics.push(comicAssistant);
    },
    ...mapActions(["getComics"]),
    ...mapMutations(["setQualification"]),
  },
  components: {
    ShowingComic,
    StarRading,
  },
};
</script>

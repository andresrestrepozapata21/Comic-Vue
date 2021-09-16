<template>
  <div>
    <ShowingComic />
    <StarRading />
    <button @click="saveComic">Calificar</button>
  </div>
</template>

<script>
// @ is an alias to /src
import ShowingComic from "../components/ShowingComic.vue";
import StarRading from "../components/StarRading.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "Comic",
  methods: {
    saveComic() {
      let comicAssistant = this.comics;
      comicAssistant["qualification"] = this.qualification;
      this.safeComics.push(comicAssistant);
      this.getComics();
      for (let j = 0; j <= 4; j++) {
        this.starAssistant[j].classList.remove("active");
      }
      this.setQualification(0);
    },
    ...mapActions(["getComics"]),
    ...mapMutations(["setQualification"]),
  },
  computed: {
    ...mapState(["comics", "qualification", "safeComics", "starAssistant"]),
  },

  components: {
    ShowingComic,
    StarRading,
  },
};
</script>

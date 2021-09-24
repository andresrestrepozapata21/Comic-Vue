<template>
  <div class="score">
    <i
      class="fa fa-star"
      v-for="(star, index) in this.maxiumStars"
      v-bind:key="index"
      @click="clickStar(index)"
      @mouseenter="starsHover(index)"
      @mouseleave="starsHover(null)"
      ref="buttonRef"
    />
    <p>
      {{
        qualification === 0
          ? "Usted no ha calificado este comic"
          : `Usted calificó este comic con ${qualification} ` +
            (qualification === 1 ? "estrella." : "estrellas.")
      }}
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "StarRading",
  data() {
    return {
      isActive: false,
      isHover: false,
    };
  },
  computed: {
    ...mapState(["qualification", "maxiumStars"]),
  },
  methods: {
    clickStar(index) {
      let referentStars = this.$refs.buttonRef;
      let referentEspecificStar = referentStars[index].classList;

      if (!referentEspecificStar.contains("active")) {
        this.paintStars(index, referentStars);
      }
      this.unpaintStars();
      this.paintStars(index, referentStars);
    },
    starsHover(index) {
      if (index !== null) {
        for (let j = 0; j <= index; j++) {
          this.$refs.buttonRef[j].classList.add("hover");
        }
      } else {
        for (let j = 0; j <= this.maxiumStars - 1; j++) {
          this.$refs.buttonRef[j].classList.remove("hover");
        }
      }
    },
    paintStars(index, referentStars) {
      for (let j = 0; j <= index; j++) {
        this.$refs.buttonRef[j].classList.add("active");
      }
      this.setQualification(index + 1);
      this.setReferentAssistantStar(referentStars);
    },
    unpaintStars() {
      for (let j = 0; j <= this.maxiumStars - 1; j++) {
        this.$refs.buttonRef[j].classList.remove("active");
      }
    },
    ...mapMutations(["setQualification", "setReferentAssistantStar"]),
  },
};
</script>

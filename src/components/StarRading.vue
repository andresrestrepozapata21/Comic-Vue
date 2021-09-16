<template>
  <div class="score">
    <i
      class="fa fa-star"
      v-for="(star, index) in 5"
      v-bind:key="star.id"
      :class="isActive ? 'active' : '' || isHover ? 'hover' : ''"
      @click="click(index)"
      @mouseenter="starsHover(index)"
      @mouseleave="starsHover(null)"
      ref="buttonRef"
    ></i>
    <p>
      {{
        qualification === 0
          ? "Usted no ha calificado este comic"
          : `Usted calificó este comic con ${qualification} ` + (qualification === 1 ? "estrella." : "estrellas.")
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

    click(index) {
      let starVDomReferent = this.$refs.buttonRef[index].classList;
      let starReferent = this.$refs.buttonRef;

      if (starVDomReferent.contains("active")) {
        this.unpaintStars()
        this.paintStars(index, starReferent)
      } else {
        this.paintStars(index, starReferent)
      }
    },
    starsHover(value) {
      if(value !== null){
          for (let j = 0; j <= value; j++) {
            this.$refs.buttonRef[j].classList.add("hover");
          }
      }else{
          for (let j = 0; j <= this.maxiumStars-1; j++) {
          this.$refs.buttonRef[j].classList.remove("hover");
        }
      }
    },
    paintStars(index, starReferent){
      for (let j = 0; j <= index; j++) {
          this.$refs.buttonRef[j].classList.add("active");
        }
        this.setQualification(index+1);
        this.setStarAssistant(starReferent);
    },
    unpaintStars(){
      for (let j = 0; j <= this.maxiumStars-1; j++) {
          this.$refs.buttonRef[j].classList.remove("active");
        }
    },
    ...mapMutations(["setQualification", "setStarAssistant"]),
  },
};
</script>

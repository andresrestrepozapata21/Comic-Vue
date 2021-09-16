<template>
  <div class="score">
    <i
      class="fa fa-star"
      v-for="(star, index) in 5"
      v-bind:key="star.id"
      :class="isActive ? 'active' : '' || isHover ? 'hover' : ''"
      @click="click(index)"
      @mouseenter="hover(index)"
      @mouseleave="hover(null)"
      ref="buttonRef"
    ></i>
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
      componentlocalQualification: 0,
    };
  },
  computed: {
    ...mapState(["qualification", "auxiliarStar", "hoverStars"]),
  },
  methods: {
    click(i) {
      let starVDomReferent = this.$refs.buttonRef[i].classList;
      let starHoverReferent = this.$refs.buttonRef;
      if (starVDomReferent.contains("active")) {
        for (let j = 0; j <= 4; j++) {
          this.$refs.buttonRef[j].classList.remove("active");
        }
        for (let j = 0; j <= i; j++) {
          this.$refs.buttonRef[j].classList.add("active");
        }
        this.componentlocalQualification = i + 1;
        this.setQualification(this.componentlocalQualification);
        this.setStarAssistant(starHoverReferent);
      } else {
        for (let j = 0; j <= i; j++) {
          this.$refs.buttonRef[j].classList.add("active");
        }
        this.componentlocalQualification = i + 1;
        this.setQualification(this.componentlocalQualification);
        this.setStarAssistant(starHoverReferent);
      }
    },
    hover(value) {
      if(value !== null){
          for (let j = 0; j <= value; j++) {
            this.$refs.buttonRef[j].classList.add("hover");
          }
      }else{
          for (let j = 0; j <= 4; j++) {
          this.$refs.buttonRef[j].classList.remove("hover");
        }
      }
    },
    ...mapMutations(["setQualification", "setStarAssistant", "setHoverStars"]),
  },
};
</script>

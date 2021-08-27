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
        calificacion === 0
          ? "Usted no ha calificado este comic"
          : `Usted calificó este comic con ${calificacion} ` +
            (calificacion === 1 ? "estrella." : "estrellas.")
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
      calif: 0,
    };
  },
  computed: {
    ...mapState(["calificacion", "auxiliarStar", "hoverStars"]),
  },
  methods: {
    click(i) {
      let auxiliar = this.$refs.buttonRef[i].classList;
      let auxiliar2 = this.$refs.buttonRef;
      if (auxiliar.contains("active")) {
        for (let j = 0; j <= 4; j++) {
          this.$refs.buttonRef[j].classList.remove("active");
        }
        for (let j = 0; j <= i; j++) {
          this.$refs.buttonRef[j].classList.add("active");
        }
        this.calif = i + 1;
        this.setCalificacion(this.calif);
        this.setAuxiliarStar(auxiliar2);
      } else {
        for (let j = 0; j <= i; j++) {
          this.$refs.buttonRef[j].classList.add("active");
        }
        this.calif = i + 1;
        this.setCalificacion(this.calif);
        this.setAuxiliarStar(auxiliar2);
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
    ...mapMutations(["setCalificacion", "setAuxiliarStar", "setHoverStars"]),
  },
};
</script>

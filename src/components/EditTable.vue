<template>
  <div id="ppalEditTable">
    <div ref="btnRef">
      <h1>Edita la calificacion del comic seleccionado.</h1>
      <table>
        <tr id="EditTables">
          <th>Número</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Calificación</th>
          <th>Acciones</th>
        </tr>
        <tr v-for="(comic, index) in comicForEdit" v-bind:key="index">
          <td>
            {{ comic.num }}
          </td>
          <td>
            <img :src="comic.img" alt="" width="160px" height="100px" />
          </td>
          <td>
            {{ comic.title }}
          </td>
          <td>
            <input
              type="text"
              v-model="newQualification"
              placeholder="Ingresa nueva calificación"
            />
          </td>
          <td>
            <button id="btnClassify" @click="EditQualification()">
              Calificar
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import toastr from "toastr";

export default {
  name: "EditTable",
  data() {
    return {
      newQualification: null,
    };
  },
  computed: {
    ...mapState(["safeComics", "comicForEdit"]),
  },
  methods: {
    EditQualification() {
      if (!/^[1-5]+$/.test(this.newQualification))
        return toastr.error("Debes ingresar un numero del 1 al 5.");
      this.comicForEdit[0]["qualification"] = this.newQualification;
      this.safeComics.forEach((el) => {
        if (el.num === this.comicForEdit[0].num) {
          el = this.comicForEdit;
          toastr.success("Calificación del comic editada satisfactoriamente");
          return this.$router.push("Classified");
        }
      });
    },
  },
};
</script>

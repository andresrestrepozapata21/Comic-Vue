<template>
  <div id="ppal1">
    <h1>
      {{ isEmpty ? "No hay comics calificados" : "" }}
    </h1>
    <div class="empty" ref="tableRef">
      <h1>Historial de Calificaciones</h1>
      <table id="classifiedTable">
        <tr id="titles">
          <th>Número</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Calificación</th>
          <th>Acciones</th>
        </tr>
        <tr v-for="(comic, index) in safeComics" v-bind:key="index">
          <td>
            {{ comic.num }}
          </td>
          <td>
            <img :src="comic.img" alt="" width="160px" height="100px" />
          </td>
          <td>
            {{ comic.title }}
          </td>
          <td>{{ comic.qualification }} Estrellas</td>
          <td id="btnsTable">
            <router-link to="/EditTable">
              <button id="btnEdit" @click="editQualification(index)">
                Editar
              </button>
            </router-link>
            <button id="btnDelete" @click="deleteComic(index)">Eliminar</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Classified",
  data() {
    return {
      isEmpty: true,
    };
  },
  computed: {
    ...mapState(["safeComics", "comicForEdit"]),
  },
  methods: {
    deleteComic(index) {
      this.safeComics.splice(index, 1);
      if (this.safeComics.length === 0) {
        this.$refs.tableRef.classList.remove("full");
        this.isEmpty = true;
      }
    },
    editQualification(index) {
      if (this.comicForEdit.length !== 0) {
        this.comicForEdit.shift();
        return this.comicForEdit.push(this.safeComics[index]);
      }
      this.comicForEdit.push(this.safeComics[index]);
    },
  },
  mounted() {
    if (this.safeComics.length !== 0) {
      this.$refs.tableRef.classList.add("full");
      this.isEmpty = false;
    }
  },
};
</script>

<template>
  <div id="ppal1">
    <h1>Historial de Calificaciones</h1>
    <table>
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
          <button id="btnEdit" @click="editComic">Editar</button>
          <button id="btnDelete" @click="deleteComic(index)">Eliminar</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Classified",
  computed: {
    ...mapState(["safeComics"]),
  },
  methods: {
      deleteComic(index){
          this.safeComics.splice(index, 1)
      },
      editComic(){
          console.log("editar")
      },
  },
};
</script>

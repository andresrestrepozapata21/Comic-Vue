<template>
    <div id="ppal1">
        <h1>Historial de Calificaciones</h1>
        <ul id="tableTitle">
            <li>
                Número
                <p> | </p>
                <p>
                Nombre
                </p>
                <p> | </p>
                Calificación</li>
        </ul>
        <ul id="record">
            <li v-for="comic in safeComics" v-bind:key=comic.id>
                {{comic.num}}
                
                <p>
                {{comic.title}}
                </p>
                
                {{comic.qualification}} Estrellas</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "Classified",
    computed: {
        ...mapState([ 'safeComics' ])
    }
}
</script>

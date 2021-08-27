<template>
    <div id="ppal1">
        <h1>Historial de Calificaciones</h1>
        <ul id="history1">
            <li>
                Número
                <p> | </p>
                <p>
                Nombre
                </p>
                <p> | </p>
                Calificación</li>
        </ul>
        <ul id="history">
            <li v-for="comic in safeComics" v-bind:key=comic.id>
                {{comic.num}}
                
                <p>
                {{comic.title}}
                </p>
                
                {{comic.calificacion}} Estrellas</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "Calificados",
    computed: {
        ...mapState([ 'safeComics' ])
    }
}
</script>

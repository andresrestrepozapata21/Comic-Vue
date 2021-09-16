<template>
    <div className="ppal">
        <h1 className="titulo">{{comics.title}}</h1>
        <img :src="comics.img" alt="" width="60%" height="360px">
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'ShowingComic',
    computed: {
        ...mapState([ 'comics' ]),
    },
    methods: {
        ...mapActions([ 'getComics' ]),
    },
    mounted(){
        this.getComics()
    }
}
</script>

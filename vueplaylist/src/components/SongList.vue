<template>
    <div>
        <h2>Songs:</h2>
        <div v-for="track in songs" :key="track">
            <p>Song Title: {{songs.title}}, Artist: {{songs.artist}} <button @click="addToPlaylist(song)">+</button> </p>
        </div>
        <PlayList/>
    </div>
</template>

<script>
import PlayList from "./PlayList.vue";

    export default {
        name: "SongList",
        components: {
            PlayList 
        },
        computed :{
            songs(){
                return this.$store.state.songs;   
            }
        },
        methods: {
            addToPlaylist: function(song) {
                this.$store.commit('addToPlaylist', song)
            },
            removeFromList: function(song) {
                this.$store.commit('removeFromList', song)
            }
        }
    }
</script>

<style lang="scss" scoped>
  
</style>
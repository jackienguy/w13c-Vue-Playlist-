<template>
    <div>
        <h2>Playlist:</h2>
         <button @click="removeFromList(song)">-</button> 
       
    </div>
</template>

<script>

    export default {
        name: "PlayList",
        computed: {
            songs() {
                return this.$store.state.songs;
            }  
        },
        methods: {
            removeFromList: function(song) {
                this.$store.commit('removeFromList', song)
            }
        }
    }
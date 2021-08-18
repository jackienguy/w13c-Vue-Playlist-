<template>
    <div>
        <h2>Songs:</h2>
        <p>Song Title: {{songs}}, Artist: {{artistName}} <button @click="addToPlaylist">+</button> </p>
        <p>Song Title: {{songs}}, Artist: {{artistName}} <button @click="addToPlaylist">+</button> </p>
        <p>Song Title: {{songs}}, Artist: {{artistName}} <button @click="addToPlaylist">+</button> </p>
         
    </div>
</template>

<script>
    export default {
        name: "SongList",
        computed :{
            songs(){
                return this.$store.state.songTitle;
                
            },
            artistName(){
                return this.$store.state.artist;
            }
        }
    }
</script>

<style lang="scss" scoped>
  
</style>
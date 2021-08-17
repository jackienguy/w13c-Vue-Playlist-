<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <PageBody/>
    <SongList/>
    <PlayList/>
  </div>
</template>

<script>

import PageBody from './components/PageBody.vue';
import SongList from './components/SongList.vue';
import PlayList from './components/PlayList.vue';

export default {
  name: "App",
  components: {
    PageBody,
    SongList,
    PlayList
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

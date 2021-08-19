import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [
      {
        title: "Randon Song",
        artist: "Randon Artist"
      },
      {
        title: "Randon Song1",
        artist: "Randon Artist1"
      },
      {
        title: "Randon Song2",
        artist: "Randon Artist2"
      }
    ]
  },
  mutations: {
    addToPlaylist (state, song){
      state.songs.push(song);
    },
    removeFromList (state, song){
      state.songs.splice(song);
    }
  },
  actions: {
    addSong: function(context, song){
      context.commit('addToPlayist', song)
    },
    removeSong: function(context,song){
      context.commit('removeFromList', song)
    }
  },
  getters: {},
});

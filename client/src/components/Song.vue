<template>
  <div>
    <v-container class="text-center">
      <v-row>
        <v-col cols="5">
          <v-toolbar flat dense class='cyan' dark>
            <v-toolbar-title>Songs metada</v-toolbar-title>
          </v-toolbar>
          <div class="d-flex mb-3 shadows">
              <div class="img-container">
                  <img :src="song.albumImageUrl" :alt="song.album">
                  <div class="img-album album">{{song.album}}</div>
              </div>
              <div class="pa-2 mx-auto d-flex flex-column justify-space-between">
                <p class="title">{{song.title}}</p>
                <p class="artist"><b>Artist:</b> {{song.artist}}</p>
                <p class="album"><em><b>Genre: </b></em>{{song.genre}}</p>
                <p class="album">{{song.youtubeId}}</p>
              </div>
          </div>
        </v-col>
        <v-col cols="7">
          <v-row>
              <v-col cols="12" class="mt-0 pa-0">
                <v-toolbar flat dense class='cyan' dark>
                    <v-toolbar-title>Tab</v-toolbar-title>
                </v-toolbar>
                <textarea class=".tab" readonly :value="song.tab"></textarea>
              </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <pre>{{ song }}</pre>
    <h1>{{$route.params.songId}}</h1>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService.js'
export default {
  name: 'Song-id',
  data () {
    return {
      song: null,
      songId: this.$route.params.songId
    }
  },
  async mounted () {
    const response = await SongsService.getById(this.songId)
    this.song = response.data
    console.log(response.data)
  }
}
</script>

<style>
.img-container {
  width: 200px;
  height: 200px;
  position: relative;
}
.img-container img {
  width: 100%;
  height: 100%
}
.img-album {
    background: black;
    color: white;
    position: absolute;
    bottom: 0;
    width: 200px;
}
.title {
  font-size: 24px;
}
.artist {
  font-size: 18px;
}
.album {
  font-size: 14px;
}
.shadows {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important
}
.tab {
    width: 90%;
    font-family: monospace;
    height: 600px;
    border: none;
    border-style: none;
    border-color: transparent;
    overflow: auto;
}
</style>

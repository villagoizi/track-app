<template>
  <div>
    <v-container class="text-center">
      <PanelSong title="Song Metadata" titleTwo="Youtube Video">
        <SongMetadata :song="song" slot="column-one"/>
        <div slot="column-two" v-if="song.youtubeId != null" class="shadows pa-0">
          <youtube :video-id="song.youtubeId"></youtube>
        </div>
      </PanelSong>
      <PanelSong title="Tab" titleTwo="Lyrics">
        <textarea slot="column-one" :song="song" class="tab" readonly :value="song.tab"></textarea>
        <textarea slot="column-two" :song="song" class="tab" readonly :value="song.lyrics"></textarea>
      </PanelSong>
    </v-container>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService.js'
import PanelSong from '@/components/Song/PanelViewSong.vue'
import SongMetadata from '@/components/Song/SongMetadata.vue'
export default {
  name: 'Song-id',
  data () {
    return {
      song: null,
      songId: this.$route.params.songId
    }
  },
  components: {
    PanelSong, SongMetadata
  },
  async mounted () {
    const response = await SongsService.getById(this.songId)
    this.song = response.data
  }
}
</script>

<style>
.tab {
    width: 100%;
    padding: 20px;
    font-family: monospace;
    height: 600px;
    border: none;
    border-style: none;
    border-color: transparent;
    overflow: auto;
}
.shadows {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important
}
</style>

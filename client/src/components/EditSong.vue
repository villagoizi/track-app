<template>
  <div>
    <v-container class="text-center">
      <v-row>
        <v-col>
          <v-toolbar flat dense class='cyan' dark>
            <v-toolbar-title></v-toolbar-title>
          </v-toolbar>
          <div class='px-4 py-4 text-center'>
            <v-text-field v-model='song.title' required :rules="required" type='text' label='Title'></v-text-field>
            <v-text-field v-model='song.artist' required :rules="required" type='text' label='Artist'></v-text-field>
            <v-text-field v-model='song.genre' required :rules="required" type='text' label='Genre'></v-text-field>
            <v-text-field v-model='song.album' required :rules="required" type='text' label='Album'></v-text-field>
            <v-text-field v-model='song.youtubeId' required :rules="required" type='text' label='YoutubeId'></v-text-field>
            <v-text-field v-model='song.albumImageUrl' required :rules="required" type='text' label='Album Image URL'></v-text-field>
          </div>
        </v-col>
        <v-col>
          <v-toolbar flat dense class='cyan' dark>
            <v-toolbar-title></v-toolbar-title>
          </v-toolbar>
          <div class='px-4 py-4 text-center'>
            <v-textarea v-model='song.tab' required :rules="required" label='Tab'></v-textarea>
            <v-textarea v-model='song.lyrics' required :rules="required" label='Lyrics'></v-textarea>
          </div>
        </v-col>
      </v-row>
      <v-btn color='cyan' dark @click='saveSong'>Save song</v-btn>
    </v-container>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService.js'
export default {
  data () {
    return {
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tab: ''
      },
      required: [
        (v) => !!v || 'Required'
      ],
      songId: this.$route.params.songId
    }
  },
  methods: {
    async saveSong () {
      try {
        await SongsService.editSong(this.songId, this.song)
        this.$router.push({ name: 'Song-id', params: { songId: this.songId } })
      } catch (e) {
        console.log(e)
      }
    }
  },
  async mounted () {
    const response = await SongsService.getById(this.songId)
    this.song = response.data
  }
}
</script>
<style scoped>

</style>

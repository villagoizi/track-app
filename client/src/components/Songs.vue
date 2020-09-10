<template>
    <v-row>
      <v-col cols="6">
        <panel title="Bookmark">
          <Bookmark />
        </panel>
      </v-col>
      <v-col cols="6">
        <search-song />
        <panel title="Songs">
          <v-btn v-if="$store.state.isLoggedUser" :to="{ name: 'Song-create'}" class="mx-2" medium absolute right slot="action-song" fab dark color="cyan">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
          <div class="d-flex mb-3 shadows" v-for="song in songs" :key="song.id">
            <div class="img-container d-inline-block">
              <img :src="song.albumImageUrl" />
            </div>
            <div class="pa-2 mx-auto d-flex flex-column justify-space-between">
              <p class="title">{{song.title}}</p>
              <p class="artist">{{song.artist}}</p>
              <p class="album">{{song.album}}</p>
              <v-btn class="cyan" dark :to="{ name: 'Song-id', params: { songId: song.id } }">View</v-btn>
            </div>
          </div>
        </panel>
      </v-col>
    </v-row>

</template>

<script>
import SongsService from '@/services/SongsService.js'
import Bookmark from '@/components/Bookmark.vue'
import Panel from '@/components/Panel.vue'
import SearchSong from '@/components/SearchSong.vue'
export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel,
    SearchSong,
    Bookmark
  },
  async mounted () {
    //   Do the request in api
    const response = await SongsService.index()
    this.songs = response.data
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        if (!value) return
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.img-container {
  width: 200px;
  height: 200px;
}
.img-container img {
  width: 100%;
  height: 100%
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
</style>

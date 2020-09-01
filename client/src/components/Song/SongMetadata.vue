<template>
  <div class="d-flex mb-3 shadows">
    <div class="img-container">
      <img :src="song.albumImageUrl" :alt="song.album" />
      <div class="img-album album">{{song.album}}</div>
    </div>
    <div class="pa-2 mx-auto d-flex flex-column justify-space-between">
      <p class="title">{{song.title}}</p>
      <p class="artist">
        <b>Artist:</b>
        {{song.artist}}
      </p>
      <p class="album">
        <em>
          <b>Genre:</b>
        </em>
        {{song.genre}}
      </p>
      <v-btn v-if="isLoggedUser" class="cyan" dark :to="{ name: 'Song-edit-id', params: { songId: song.id } }">Edit</v-btn>
      <v-btn v-if="isLoggedUser && !isBookmark" class="cyan mt-1" dark @click="save" >Bookmark</v-btn>
      <v-btn v-if="isLoggedUser && isBookmark" class="cyan mt-1" dark @click="unsave">Unbookmark</v-btn>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BookmarkService from '@/services/BookmarkService.js'
export default {
  props: ['song'],
  data () {
    return {
      isBookmark: false,
      bookmark: {}
    }
  },
  computed: {
    ...mapState(['isLoggedUser'])
  },
  methods: {
    async save () {
      try {
        const { data } = await BookmarkService.book({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
        this.bookmark = data
        this.isBookmark = true
      } catch (e) {
        console.log(e)
      }
    },
    async unsave () {
      try {
        await BookmarkService.unbook(this.bookmark.id)
        this.bookmark = {}
        this.isBookmark = false
      } catch (e) {
        console.log(e)
      }
    }
  },
  async mounted () {
    if (!this.$store.state.isLoggedUser) {
      return
    }
    try {
      const { data } = await BookmarkService.index({
        songId: this.song.id,
        userId: this.$store.state.user.id
      })
      this.isBookmark = !!data
      this.bookmark = data
      console.log('bookmark', this.isBookmark, this.song.id)
    } catch (e) {
      console.log(e)
    }
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
</style>

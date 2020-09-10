<template>
  <v-data-table :headers="headers" :items="bookmarks">
    <template slot="items">
      <td class="text-xs-right">
          {{item.createdAt}}
      </td>
    </template>
  </v-data-table>
</template>

<script>
import { mapState } from 'vuex'
import BookmarkService from '@/services/BookmarkService.js'
export default {
  data () {
    return {
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Artist', value: 'artist' }
      ],
      bookmarks: []
    }
  },
  computed: {
    ...mapState(['isLoggedUser', 'user'])
  },
  async mounted () {
    if (this.isLoggedUser) {
      this.bookmarks = (await BookmarkService.user(this.user.id)).data
    }
  }
}
</script>

<style>
</style>

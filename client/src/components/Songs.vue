<template>
  <panel title="Songs"></panel>
</template>

<script>
import SongsService from '@/services/SongsService.js'
import Panel from '@/components/Panel.vue'
export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel
  },
  async mounted () {
    //   Do the request in api
    this.songs = await SongsService.index()
  }
}
</script>

<style>
</style>

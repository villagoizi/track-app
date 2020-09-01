<template>
  <Panel title="Search">
    <v-text-field v-model='search' label='Search by title, artist, album or genre'></v-text-field>
  </Panel>
</template>

<script>
import Panel from '@/components/Panel.vue'
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  components: {
    Panel
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'Songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 900),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }

}
</script>

<style>

</style>

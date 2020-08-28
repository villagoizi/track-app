<template>
  <v-container>
    <v-row justify='center'>
      <v-col md='5'>
        <div class='white elevation-2'>
          <v-toolbar flat dense class='cyan' dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
          </v-toolbar>
          <div class='px-4 py-4 text-center'>
              <slot>No slot</slot>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    title: String
  }
}
</script>
<style scoped>

</style>

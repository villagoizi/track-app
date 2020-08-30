<template>
  <v-row>
    <v-col cols="6">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-toolbar>
      <slot name="column-one">
        Is empty
      </slot>
    </v-col>
    <v-col cols="6">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{titleTwo}}</v-toolbar-title>
      </v-toolbar>
      <slot name="column-two">
        Is empty
      </slot>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['title', 'titleTwo']
}
</script>

<style>
iframe {
  width: 100%;
  max-width: 400px;
  height: 200px;
}
</style>

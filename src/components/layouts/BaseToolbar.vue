<script>
import Vue from 'vue'

export default {
  name: 'MainScreen',
  data() {
    return {
      shopName: 'FOODMART'
    }
  },
  created() {
    console.log(Vue.prototype)
  }
}
</script>

<template>
  <div id="main" class="main-screen">
    <v-toolbar
      scroll-off-screen
      color="deep-orange darken-3"
      flat
      dark
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title  class="white--text">{{shopName}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
         <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<style lang="sass" scoped>
@import 'includes'

</style>

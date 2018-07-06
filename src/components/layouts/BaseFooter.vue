<script>
export default {
  name: 'BaseFooter',
  props: {
    icons: {
      type: Array,
      required: true
    }
  },
  methods: {
    navigateTo(item) {
      this.$emit('input', item.id)
    }
  }
}
</script>

<template>
  <v-footer
    height="auto"
    color="deep-orange darken-3"
    fixed
  >
    <v-layout
      justify-between
      d-flex
      row
    >
      <v-btn
        large
        v-for="item in icons"
        :key="item.id"
        @click="navigateTo(item)"
        color="white"
        flat
      >
        <i class="material-icons">
        {{item.icon}}
        </i>
      </v-btn>
    </v-layout>
  </v-footer>
</template>

<style lang="sass" scoped>
.v-btn
  margin: 0
</style>
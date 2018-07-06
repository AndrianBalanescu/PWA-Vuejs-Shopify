<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style lang="sass" scoped>
@import 'includes'

#app
  font-family: $default-font
  font-weight: $default-weight
  font-size: $default-size
  letter-spacing: $default-spacing
  line-height: $default-line-height
  
</style>

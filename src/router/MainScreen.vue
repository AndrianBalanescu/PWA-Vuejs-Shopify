<script>
import Vue from 'vue'
import BaseToolbar from '../components/layouts/BaseToolbar'
import BaseFooter from '../components/layouts/BaseFooter'

export default {
  name: 'MainScreen',
  components: {
    BaseToolbar,
    BaseFooter
  },
  data() {
    return {
      shopName: 'Бартер',
      activeItem: 0,
      links: [
        {
          id: 2,
          icon: 'shopping_cart',
          route: 'ShopScreen'
        },
        {
          id: 3,
          icon: 'format_list_bulleted',
          route: 'OrdersScreen'
        },
        {
          id: 4,
          icon: 'drafts',
          route: 'ContactScreen'
        },
        {
          id: 5,
          icon: 'today',
          route: 'NewsScreen'
        }
      ]
    }
  },
  mounted() {
    const item = this.links.find(item => item.route === this.$route.name)
    this.activeItem = item.id
  },
  watch: {
    activeItem(value) {
      const item = this.links.find(item => item.id === value)
      if (item) {
        this.$router.replace({ name: item.route })
      }
    }
  }
}
</script>

<template>
  <div id="main" class="main-screen">
    <!-- <base-toolbar/> -->
      <router-view/>
    <base-footer :icons="links" v-model="activeItem"/>
  </div>
</template>

<style lang="sass" scoped>
@import 'includes'

</style>

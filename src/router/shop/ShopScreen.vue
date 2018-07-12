<script>
import { mapGetters, mapActions } from 'vuex'
import categoriesApi from '@/api/categories.api'
import ShopCard from './ShopCard'
import CategoriesList from './CategoriesList'
export default {
  name: 'ShopScreen',
  components: {
    ShopCard,
    CategoriesList
  },
  data() {
    return {
      loading: false,
      categories: []
    }
  },
  mounted() {
    this.fetchShop(),
    this.fecthCategoriesForShop()
  },
  computed: mapGetters('shop', {
    shop: 'getShop',
  }),
  methods: {
    ...mapActions('shop', ['fetchShop']),
    async fecthCategoriesForShop() {
      this.loading = true
      try {
        const category = await categoriesApi.getCategories()
        this.categories = category
      } catch(error) {
        console.log(error)
      }
    }
  }
}
</script>

<template>
  <div v-if="shop">
    <shop-card :shop="shop"/>
    <categories-list :categories="shop.categories" />
  </div>
</template>

<style lang="sass" scoped>
@import 'includes'

.divider_vertical
  position: relative
  &:after
    content: ''
    border-right: 2px dashed darken($body, 5%)
    display: block
    position: absolute
    left: 50%
    top: -12px
    height: 25px
    width: 1px
    

.shop
  &__wrapper
    position: relative
    background: $body
  &__background
    border-radius: 0 0 18px 18px
    
  &__logo
    position: absolute
    bottom: -40px
    width: 130px
    height: 130px
    border: 3px solid $white
    box-shadow: 0 0 10px $black
    border-radius: 100%
    img
      border-radius: 100%
      @extend .object-img
  &__address
    font-size: 12px
    text-align: center
    margin: 10px 0
    padding: 10px 0
    border-bottom: 2px dashed darken($body, 5%)
    border-top: 2px dashed darken($body, 5%)
    color: lighten($black, 5%)
    .material-icons
      font-size: 20px
    
  &__information
    padding: 40px 10px 25px
    background-color: lighten($body, 4%)
    box-shadow: 0 0 25px 0 rgba(171,171,171,.5)

    &__item
      color: lighten($black, 5%)
      border: 2px dashed darken($body, 5%)
      border-radius: 5px
      padding: 10px
      text-align: center
      margin: 0 3px
      span
        font-size: 15px
        font-weight: $default-weight + 100

    .shop__body
      height: 100%
</style>
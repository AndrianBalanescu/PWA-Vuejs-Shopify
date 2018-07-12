<script>
export default {
  name: 'CategoriesList',
  props: {
    categories: Array
  }
}
</script>

<template>
  <div class="categories__list">
    <div v-for="category in categories" :key="category.id" class="categories__item">
      <div class="svg">
        {{category.svg}}
      </div>
      <span>
        {{category.name}}
      </span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import 'includes'
.svg
  width: 32px
  height: 32px
  display: block
  border: 1px solid lighten($black, 75%)
  margin-right: 10px
.categories__item
  width: 100% 
  padding: 15px
  @extend .d-flex
  border-bottom: 1px solid lighten($black, 75%)
  span
    font-size: 16px
</style>
<script>
export default {
  name: 'ShopCart',
  props: {
    shop: Object
  }
}
</script>

<template>
  <div class="shop">
    <div class="shop__wrapper">
      <v-parallax class="shop__background" height="200" src="/static/background.jpg"></v-parallax>
      <v-layout align-center column>
        <div class="shop__logo">
          <img src="/static/logo.jpg" alt="">
        </div>
      </v-layout>
    </div>
    <div class="shop__information">
      <div class="shop__address d-flex align-center justify-space-between">
        <div class=" d-flex align-center">
          <i class="material-icons">phone</i>
          <h3>{{shop.phone}}</h3>
        </div>
        <div class="divider_vertical"></div>
        <div class=" d-flex align-center">
          <i class="material-icons">place</i>
          <h3>{{shop.address}}</h3>
        </div>
      </div>
      <div class="shop__information__block d-flex align-center justify-center">
        <v-flex xs4>
            <div class="shop__information__item">
              <small>Доставка</small><br>
              <span class="accent">{{shop.shipment}} сом</span>
            </div>
          </v-flex>
          <v-flex xs4>
            
            <div class="shop__information__item">
              <small>Мин. заказ</small><br>
              <span>{{shop.order}} сом</span>
            </div>
          </v-flex>
          <v-flex xs4>
            
            <div class="shop__information__item">
              <small>Время (мин)</small><br>
              <span>{{shop.workingHours}}</span>
            </div>
          </v-flex>
      </div>
    </div>
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
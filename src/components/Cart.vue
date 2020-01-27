<template>
  <div>
      <div class="glass"></div>
      <div class="cart">
        You have some items in your cart
        <ul>
          <li>Awesome thing x 15 = 25$</li>
        </ul>
        <router-link :to="{name: 'calculator'}">Shipping Calculator</router-link>
        <router-view></router-view>
        <br/> <br/>
        <button @click="close">Close</button>
      </div>
  </div>
</template>

<script>
//import router from 'vue-router'

export default {
  beforeRouteEnter(to, from, next) {
    next(c => {
      console.log('in next:', c.$router.getBookmark)
      c.$routerBookmark = c.$router.getBookmark()
    })
  },

  methods: {
    close() {
      console.log('called', this.$routerBookmark)
      this.$router.gotoBookmark(this.$routerBookmark)
    }
  }
}
</script>

<style scoped>

</style>

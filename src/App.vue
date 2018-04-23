<template>
  <div id="app">
    <ul>
      <li>
        <router-link tag="a" :to="{name: 'Home'}">
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <router-link tag="a" :to="{name: 'Stars'}">
          <span>Stars</span>
        </router-link>
      </li>
      <li>
        <router-link tag="a" :to="{name: 'About'}">
          <span>About</span>
        </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
    <hr>
    <h1>List info is here</h1>
    <bboy-list />
  </div>
</template>

<script>
const BboyList = () => import(/* webpackChunkName: "Home" */ '@/components/List.vue')
export default {
  components: {
   BboyList
  }
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
 ul
  display flex
  list-style none
  li
    margin 10px
    justify-content center
    align-items center
</style>

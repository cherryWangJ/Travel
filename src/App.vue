<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <m-tabbar></m-tabbar>
  </div>
</template>

<script>
import mTabbar from '@/common/tabbar/index'
export default {
  name: 'App',
  components: {
    mTabbar
  }
}
</script>

<style>
</style>

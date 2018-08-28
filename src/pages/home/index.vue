<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
    <Recommend></Recommend>
    <Week></Week>
  </div>
</template>
<script>
import Header from '@/pages/components/Header'
import Swiper from '@/pages/components/Swiper'
import Icons from '@/pages/components/Icons'
import Recommend from '@/pages/components/Recommend'
import Week from '@/pages/components/Week'
export default {
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Week
  }
}
</script>

<style scoped>

</style>

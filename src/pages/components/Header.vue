<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont left-icon">&#xe624;</div>
        </div>
        <div class="header-content">
            <input class="iconfont header-input" type="text" :placeholder="icon">
        </div>
        <router-link to="/city">
            <div class="header-right-parent">
                <div class="header-right">
                    {{this.cururentCity}}<span class="iconfont right-icon">&#xe64a;</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      icon: '  \ue632 输入城市/景点/游玩主题'
    }
  },
  computed: {
      ...mapState({
          cururentCity: 'city'
      })
  }
}
</script>

<style scoped>
.header {
    height: .86rem;
    line-height: .86rem;
    display: flex;
    color: #ffffff;
    background-color: #00bcd4;
}
.header-left {
    width: .70rem;
    float: left;
}
.header-left .left-icon {
    text-align: center;
    font-size: .4rem;
}
.header-content {
    flex: 1;
}
.header-content .header-input {
    margin-left: .04rem;
    height: .64rem;
    width: 5.1rem;
    border-radius: .1rem;
}
input::-webkit-input-placeholder {
    color: #cccccc;
}
.header-right {
    overflow: hidden;
    min-width: 1.24rem;
    position: absolute;
    top: 0;
    right: 0;
    font-size: .26rem;
    padding: 0 .02rem;
    text-align: center;
    color: #ffffff;
}
.header-right .right-icon {
    font-size: .2rem;
    margin-left: .04rem;
}
</style>

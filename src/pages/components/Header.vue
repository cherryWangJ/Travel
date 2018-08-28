<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont left-icon">&#xe624;</div>
        </div>
        <div class="header-content">
            <input class="iconfont header-input" type="text" :placeholder="icon">
        </div>
        <div class="header-right">
            {{this.city}}<span class="iconfont right-icon">&#xe64a;</span>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        city: String
    },
  data () {
    return {
      icon: '  \ue632 输入城市/景点/游玩主题'
    }
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
    width: 5.2rem;
    border-radius: .1rem;
}
input::-webkit-input-placeholder {
    color: #cccccc;
}
.header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
}
.header-right .right-icon {
    font-size: .24rem;
}
</style>

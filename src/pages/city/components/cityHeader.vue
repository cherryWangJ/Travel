<template>
    <div class="city-container">
        <div class="city-header">
            城市选择
            <router-link to="/">
                <div class="iconfont city-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    }
}
</script>

<style scoped>
.city-header {
    height: .86rem;
    line-height: .86rem;
    overflow: hidden;
    position: relative;
    background-color: #00bcd4;
    text-align: center;
    font-size: .32rem;
    color: #ffffff;
}
.city-back {
    position: absolute;
    top: 0;
    left: .2rem;
    font-size: .4rem;
    color: #ffffff;
}
</style>

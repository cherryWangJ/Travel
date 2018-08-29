<template>
    <div class="city-search">
        <input class="iconfont search-input" type="text" :placeholder="showIcon" />
    </div>
</template>

<script>
export default {
    data () {
        return {
            showIcon: '\ue632 请输入城市或拼音'
        }
    }
}
</script>

<style scoped>
.city-search {
    height: .72rem;
    padding: 0 .1rem;
    background-color: #00bcd4;
}
.search-input {
    height: .64rem;
    width: 100%;
    padding: 0 .2rem;
    box-sizing: border-box;
    border-radius: .1rem;
    text-align: center;
}
input::-webkit-input-placeholder {
    color: #cccccc;
}
</style>

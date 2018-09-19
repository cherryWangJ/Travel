<template>
    <div class="m-tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        value: String
    },
    data () {
        return {
        }
    }
}
</script>
<style scoped>
.m-tabbar{
    display: flex;
    flex-direction: row;
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: .84rem;
    overflow: hidden;
    background: #ffffff;
    border-top: .02rem solid #e4e4e4;
}
</style>

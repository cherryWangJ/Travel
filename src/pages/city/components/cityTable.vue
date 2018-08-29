<template>
    <div class="city-table">
        <ul class="table-item">
            <li class="item" v-for="(item,key) in tablelist" :key="key" v-text="key"></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        tablelist: Object
    },
    name: 'tableList',
    data () {
        return {
        }
    }
}
</script>

<style scoped>
.table-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2.5rem;
    right: 0;
    bottom: 0;
    width: .4rem;
}
.item {
    line-height: .4rem;
    color: #00bcd4;
}
</style>

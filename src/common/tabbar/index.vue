<template>
    <div>
        <mt-tabbar v-model="select" :value="select">
            <mt-tab-item id="index" isRouter>
                <div class="iconfont iconSize" slot="icon">&#xe62e;</div>
                首页
            </mt-tab-item>
            <mt-tab-item id="findTab" isRouter>
                <div class="iconfont" slot="icon">&#xe632;</div>
                发现
            </mt-tab-item>
            <mt-tab-item id="shopTab" isRouter>
               <div class="iconfont" slot="icon">&#xe63f;</div>
                购物车
            </mt-tab-item>
            <mt-tab-item id="mineTab" isRouter>
                <div class="iconfont" slot="icon">&#xe62f;</div>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import mtTabbar from '@/common/tabbar/tabbar'
import mtTabItem from '@/common/tabbar/tabbarItem'
export default {
    data () {
        return {
            select: 'index'
        }
    },
    components: {
        mtTabbar,
        mtTabItem
    }
}
</script>

<style scoped>
.iconSize {
    text-align: center;
    font-size: .36rem;
}
</style>
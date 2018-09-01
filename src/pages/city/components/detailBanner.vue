<template>
<div>
    <div class="detail-banner" @click="handleShow" v-for="item in bannerlist" :key="item.id">
        <img class="banner-img" 
             :src="item.bannerUrl"/>
        <div class="banner-info">
            <div class="info-title" v-text="item.title"></div>
            <div class="info-number" v-text="item.number"><span class="iconfont banner-icon">&#xe650;</span></div>
        </div>
    </div>
    <fade-animation>
        <common-gallary :imgs="imglist" 
                        v-show="showGallary"
                        @close="closeGallary">
        </common-gallary>
    </fade-animation>
</div>
</template>

<script>
import commonGallary from '@/common/gallary/Gallary'
import fadeAnimation from '@/common/fade/fadeAnimation'
export default {
    name: 'detailBanner',
    props: {
        imglist: Array,
        bannerlist: Array
    },
    data () {
        return {
            showGallary: false
        }
    },
    methods: {
        handleShow () {
            this.showGallary = true
        },
        closeGallary () {
            this.showGallary = false
        }
    },
    components: {
        commonGallary,
        fadeAnimation
    }
}
</script>

<style scoped>
.detail-banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
}
.banner-img {
    width: 100%;
}
.banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .64rem;
    color: #ffffff;
    background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
}
.info-title {
    flex: 7;
    font-size: .32rem;
    padding: 0 .1rem;
}
.info-number {
    flex: 1;
    font-size: .24rem;
    height: .32rem;
    line-height: .32rem;
    padding: 0 .2rem;
    margin-top: .16rem;
    margin-right: .1rem;
    border-radius: .1rem;
    background: rgba(0, 0, 0, .8)
}
.banner-icon {
    font-size: .24rem;
    margin-right: .1rem;
}
</style>

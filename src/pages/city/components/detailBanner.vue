<template>
<div>
    <div class="detail-banner" @click="handleShow">
        <img class="banner-img" 
             src="//img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_600x330_5d562f69.jpg"/>
        <div class="banner-info">
            <div class="info-title">金海湖风景区(AAAA景区)</div>
            <div class="info-number"><span class="iconfont banner-icon">&#xe650;</span>5</div>
        </div>
    </div>
    <fade-animation>
        <common-gallary :imgs="imgList" 
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
    data () {
        return {
            showGallary: false,
            imgList: [
                {
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_r_800x800_0e2783ce.jpg'
                },
                 {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/a5/a533f2c93fbe3227a3.img.jpg_r_800x800_df5e46a5.jpg'
                },
                 {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/21/212f9125ce6c5e7f5a.img.jpg_r_800x800_a9c922ca.jpg'
                },
                {
                    id: '0004',
                    imgUrl: 'http://img1.qunarzz.com/sight/p57/201211/05/781c02f4e80fbebf93835fbb.jpg_r_800x800_9050b86b.jpg'
                },
                {
                    id: '0005',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/e1/799c3460ad742d3a632371e81df6e7c4.water.jpg_r_800x800_5b9bb62a.jpg'
                }
                ]
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

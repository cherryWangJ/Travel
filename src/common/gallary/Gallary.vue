<template>
    <div class="gallary-container" @click="closeGallary">
        <div class="gallary-wrapper">
            <swiper :options= "swiperOption">
                <swiper-slide v-for="item in imgs" :key="item.id">
                    <img class="swiper-img" :src="item.imgUrl" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'commonGallary',
    props: {
        imgs: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observer: true,
                observeParents: true
            }
        }
    },
    methods: {
        closeGallary () {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.gallary-wrapper >>> .swiper-container {
    overflow: inherit;
}
.gallary-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    z-index: 1;
}
.swiper-img {
    width: 99%;
    margin: .04rem;
}
.swiper-pagination {
    color: #ffffff;
    bottom: -1.2rem;
}
</style>

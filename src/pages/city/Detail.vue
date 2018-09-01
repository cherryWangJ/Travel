<template>
    <div class="detail">
        <detail-banner :bannerlist="bannerList"
                        :imglist="imgList"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="detail-test">
            <detail-list :list="List"></detail-list>
        </div>
    </div>
</template>

<script>
import detailBanner from '@/pages/city/components/detailBanner'
import detailHeader from '@/pages/city/components/detailHeader'
import detailList from '@/pages/city/components/detailList'

import axios from 'axios'
export default {
    name: 'detail',
    props: ['id'],
    data () {
        return {
            imgId: '',
            bannerList: [],
            imgList: [],
            List: []
        }
    },
    mounted () {
        this.getMessage()
    },
    activated () {
        if (this.imgId) {
        this.getMessage()
        }
    },
    methods: {
        getMessage () {
            axios.get('/api/index.json?id=' + this.id)
                .then(res => {
                    this.imgId = this.id
                    res = res.data
                    if (res.flag && res.data) {
                        let recommond = res.data.recommendList
                        for (let key in recommond) {
                            if (recommond[key].allImg) {
                                let img = recommond[key].allImg
                                for (let i in img) {
                                    if (this.id === img[i].id) {
                                        this.bannerList = img[i].imgTotal.bannerList
                                        this.imgList = img[i].imgTotal.imgList
                                    }
                                }
                            }
                        }
                    }
                })
                .catch(err => {
                    if (err) {
                          alert('网络延迟，请等待加载')
                    }
                })
        }
    },
    components: {
        detailBanner,
        detailHeader,
        detailList
    }
}
</script>

<style scoped>
.detail-test {
    height: 20rem;
}
</style>

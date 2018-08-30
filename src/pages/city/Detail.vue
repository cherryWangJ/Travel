<template>
    <div class="detail">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="detail-test">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import detailBanner from '@/pages/city/components/detailBanner'
import detailHeader from '@/pages/city/components/detailHeader'
import detailList from '@/pages/city/components/detailList'
export default {
    name: 'detail',
    data () {
        return {
            list: [
                {
                    id: '0001',
                    title: '成人票',
                    children: [
                        {
                            id: '000001',
                            title: '成人三馆套票',
                            children: [
                                {
                                    id: '00000001',
                                    title: '成人三馆套票    -   售于南三门'
                                }
                            ]
                        },
                        {
                            id: '000002',
                            title: '成人五馆套票'
                        }
                    ]
                },
                {
                    id: '0002',
                    title: '学生票'
                },
                {
                    id: '0003',
                    title: '儿童票'
                },
                {
                    id: '0004',
                    title: '特惠票'
                }
            ]
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

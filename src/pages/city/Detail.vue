<template>
    <div class="detail">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="detail-test"></div>
    </div>
</template>

<script>
import detailBanner from '@/pages/city/components/detailBanner'
import detailHeader from '@/pages/city/components/detailHeader'
export default {
    name: 'detail',
    data () {
        return {
        }
    },
    components: {
        detailBanner,
        detailHeader
    }
}
</script>

<style scoped>
.detail-test {
    height: 20rem;
}
</style>

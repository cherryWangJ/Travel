<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
import cityHeader from '@/pages/city/components/cityHeader'
import citySearch from '@/pages/city/components/citySearch'
export default {
    name: 'city',
    data () {
        return {
        }
    },
    components: {
        cityHeader,
        citySearch
    }
}
</script>

<style scoped>
</style>

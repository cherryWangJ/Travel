<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hotcities="hotCities" :allcities="allCities"></city-list>
        <city-table :tablelist="allCities"></city-table>
    </div>
</template>

<script>
import cityHeader from '@/pages/city/components/cityHeader'
import citySearch from '@/pages/city/components/citySearch'
import cityList from '@/pages/city/components/cityList'
import cityTable from '@/pages/city/components/cityTable'

import axios from 'axios'
export default {
    name: 'city',
    data () {
        return {
            hotCities: [],
            allCities: {}
        }
    },
    mounted () {
        this.getCitys()
    },
    methods: {
        getCitys () {
            axios.get('/api/city.json')
                .then(res => {
                    res = res.data
                    if (res.flag && res.data) {
                        this.hotCities = res.data.hotCities
                        this.allCities = res.data.cities
                    }
                })
                .catch(err => {
                    if (err) {
                         alert('网络错误，请等待加载')
                    }
                })
        }
    },
    components: {
        cityHeader,
        citySearch,
        cityList,
        cityTable
    }
}
</script>

<style scoped>
</style>

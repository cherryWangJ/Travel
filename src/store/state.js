let constantCity = '北京'
try {
    if (localStorage.city) {
        constantCity = localStorage.city
    }
} catch (error) {
}
export default {
    city: constantCity
}

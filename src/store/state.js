let constantCity = '上海'
try {
    if (localStorage.city) {
        constantCity = localStorage.city
    }
} catch (error) {
}
export default {
    city: constantCity
}

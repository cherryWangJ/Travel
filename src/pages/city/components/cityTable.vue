<template>
    <div class="city-table">
        <ul class="table-item">
            <li class="item" v-for="item in letters" :key="item" :ref="item" v-text="item" @click="handleLetter" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd"></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        tablelist: Object
    },
    name: 'tableList',
    data () {
        return {
            touchStatus: false,
            startY: ''
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
      letters () {
          const letter = []
          for (let key in this.tablelist) {
              letter.push(key)
          }
          return letter
      }
    },
    methods: {
        handleLetter (el) {
            this.$emit('change', el.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (el) {
            if (this.touchStatus) {
                const touchY = el.touches[0].clientY - 79
                const index = Math.floor((touchY - this.startY) / 20) - 3
                if (index >= 0 && index < this.letters.length) {
                    this.$emit('change', this.letters[index])
                }
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }

    }
}
</script>

<style scoped>
.table-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2.5rem;
    right: 0;
    bottom: 0;
    width: .4rem;
}
.item {
    line-height: .4rem;
    color: #00bcd4;
}
</style>

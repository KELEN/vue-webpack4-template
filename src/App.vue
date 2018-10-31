<template>
    <div id="app">
        <router-view></router-view>
        <div class="loading-box" v-show="loading">
            <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {
                loading: false
            }
        },
        mounted () {
            this.$eventBus.$on('switchLoading', (val) => {
                this.loading = val;
            })
        }
    }
</script>

<style lang="scss">
    @import "assets/scss/common";

    .loading-box {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
</style>

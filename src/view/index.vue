<template>
    <div>
        <h1>易租屋h5首页</h1>
        <div>
            <router-link to="houseShare?houseId=2&userId=21">获取房源的分享图片</router-link>
            <router-link to="rentingShare?houseId=2&userId=21">获取租赁分享图片</router-link>
            <router-link to="roommateShare?houseId=2&userId=21">获取室友分享图片</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style lang="scss" scoped>
    a {
        display: block;
    }
</style>
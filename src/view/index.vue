<template>
    <div>
        <h1 class="title">首页</h1>
        <div class="banner"></div>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style lang="scss" scoped>
    .title {
        font-size: 24px;
        text-align: center;
        margin: px2rem(60);
    }
    .banner {
        width: px2rem(400);
        height: px2rem(200);
        margin: 0 auto;
        border-radius: px2rem(10);
        background-color: #333;
    }
</style>
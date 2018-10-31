<template>
    <div class="body">
        <h1 class="title">首页</h1>
        <div class="banner"></div>
        <div>{{ money | formatMoney }}</div>
    </div>
</template>

<script>
import shareMixin from '../mixins/shareMixin'

export default {
  name: "Index",
  mixins: [ shareMixin ],
  data() {
    return {
      money: 111222333444.555
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
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
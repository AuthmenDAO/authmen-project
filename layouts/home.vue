<!--
 * @Author: vinc
 * @LastEditTime: 2020-10-13 09:53:22
 -->
<template>
  <div class="home-wrap">
    <nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
.home-wrap {
  background: #fff;
}
.public_home_head {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background: #fc0e50;
  color: #fff;
  width: 100%;
  .logo {
    img {
      width: 36px;
    }
  }
  .userIcon {
    display: flex;
    img {
      width: 22px;
      height: 22px;
      display: block;
      &:last-child {
        margin-left: 15px;
      }
    }
  }
}
.home-wrap {
  min-height: calc(~"100vh - 48px");
  box-sizing: border-box;
  .footer-s {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e5e5e5;
    ul {
      display: flex;
      li {
        width: 33.333%;
        height: 48px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        font-size: 12px;
        &.active {
          color: #ff6198;
        }
        img {
          height: 18px;
        }
        span {
          margin-top: 3px;
        }
      }
    }
  }
}
</style>

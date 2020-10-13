<!--
 * @Author: vinc
 * @LastEditTime: 2019-10-11 16:31:25
 -->
<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  methods: {}
};
</script>

<style lang="less">
.public_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 48px;
  background: #fff;
  // border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0px 2px 5px rgba(3, 3, 3, 0.3);
  .title {
    width: calc(100% - 60px);
    display: flex;
    align-items: center;
    color: #666;
    p {
      width: calc(~"100% - 60px");
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #333;
      margin-left: 30px;
      font-size: 18px;
    }
    img {
      width: 25px;
    }
  }
  .userIcon {
    display: flex;
    align-items: center;
    img {
      width: 22px;
      height: 22px;
      &:first-child {
        margin-right: 15px;
      }
    }
  }
}
</style>

<template>
  <div id="tab-bar">
    <!-- 动态存放图标和文字，就用插槽（我们主要插入一个组件所以直接用一个） -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tab-bar {
  display: flex;
  width: 100%;
  height: 49px;
  background: #f6f6f6;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0px -2px 10px 3px rgb(218, 218, 218);
}
</style>

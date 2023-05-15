<template>
  <tabbar>
    <tabbarItem path="/home" activeColor="pink">
      <img slot="icon" src="../assets/imges/tabbar/home.svg" alt="" />
      <img
        slot="icon-active"
        src="../assets/imges/tabbar/home_active.svg"
        alt=""
      />
      <div slot="text">首页</div>
    </tabbarItem>

    <tabbarItem path="/cart" activeColor="pink">
      <img slot="icon" src="../assets/imges/tabbar/category.svg" alt="" />
      <img
        slot="icon-active"
        src="../assets/imges/tabbar/category_active.svg"
        alt=""
      />
      <div slot="text">分类</div>
    </tabbarItem>

    <tabbarItem path="/category" activeColor="pink">
      <img slot="icon" src="../assets/imges/tabbar/shopcart.svg" alt="" />
      <img
        slot="icon-active"
        src="../assets/imges/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="text">购物</div>
    </tabbarItem>

    <tabbarItem path="/profile" activeColor="pink">
      <img slot="icon" src="../assets/imges/tabbar/profile.svg" alt="" />
      <img
        slot="icon-active"
        src="../assets/imges/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="text">我的</div>
    </tabbarItem>
  </tabbar>
</template>

<script>
import tabbar from "./tabb/tabbar";
import tabbarItem from "./tabb/tabbarItem";
export default {
  name: "mainTabBar",
  components: {
    tabbar,
    tabbarItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

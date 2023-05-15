<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 点击活跃状态切换图片颜色 -->
    <!-- 加一div是为了添加类名继承属性或者是完成操作(如果不添加div,给插槽设置的属性会被插入的组件样式替换掉) -->
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <!--绑定item字体活跃显示样式，通过style -->
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    // 接收组件通信，并且是String类型
    path: String,
    activeColor: {
      type: String,
      // 并设置默认值是red
      default: "red"
    }
  },
  data() {
    return {
      // isActive: false
    };
  },
  computed: {
    isActive() {
      // 重要的这里是控制的一个单独组件，不用对所有组件进行全局考虑（组件化的优点）
      // 通过route获取当前的活跃的router路径,并且判断当前通信绑定的item传输过来的额路径是否等于router路由下的活跃路径
      // 用indexOf(进行判断)
      // console.log(this.path);
      // console.log(this.$route.path);

      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      // 如果是活跃着改变字体颜色样式样式改变
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      // 点击路由路径切换
      this.$router.replace(this.path);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  margin-top: 3px;
  align-items: center;
}
.active {
  color: red;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>

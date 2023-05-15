<template>
  <div id="app">
    <maintabbar></maintabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import maintabbar from "./components/main-tab-bar";
export default {
  name: "App",
  components: {
    maintabbar
  }
};
</script>

<style></style>

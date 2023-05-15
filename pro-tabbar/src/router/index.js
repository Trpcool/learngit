import Vue from "vue";
import Router from "vue-router";
// 懒加载方式
const Home = () => import("@/views/home/Home");
const Category = () => import("@/views/category/Category");
const Cart = () => import("@/views/cart/Cart");
const Profile = () => import("@/views/profile/Profile");

Vue.use(Router);
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  }
];
export default new Router({
  routes,
  mode: "history"
});

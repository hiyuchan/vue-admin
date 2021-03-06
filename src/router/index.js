import Vue from "vue";
import VueRouter from "vue-router";
import LayoutIndex from "@/views/Layout/index.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/layout",
    hidden: true,
    meta:{
      name: "主页"
    }
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta:{
      name: "登录"
    },
    component: ()=> import("../views/Login/index.vue")
  },
  {
    path: "/layout",
    name: "Layout",
    meta:{
      name: "控制台",
      icon: "admin"
    },
    component: LayoutIndex,
    children:[
      {
        path: "/layout",
        name: "",
        meta:{
          name: "首页"
        },
        component: ()=> import("../views/Admin/index.vue"),
      }
    ]
  },
  {
    path: "/info",
    name: "Info",
    meta:{
      name: "信息管理",
      icon: "info"
    },
    component: LayoutIndex,
    children:[
      {
        path: "/infoList",
        name: "InfoList",
        meta:{
          name: "信息列表"
        },
        component: ()=> import("../views/Info/list.vue"),
      },
      {
        path: "/infoCategory",
        name: "InfoCategory",
        meta:{
          name: "信息分类"
        },
        component: ()=> import("../views/Info/category.vue"),
      }
    ]
  },
  
  {
    path: "/user",
    name: "User",
    meta:{
      name: "用户管理",
      icon: "user"
    },
    component: LayoutIndex,
    children:[
      {
        path: "/userList",
        name: "UserList",
        meta:{
          name: "用户列表"
        },
        component: ()=> import("../views/User/userList.vue"),
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

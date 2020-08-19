import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
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
    component: ()=> import("../views/login/index.vue")
  },
  {
    path: "/layout",
    name: "Layout",
    meta:{
      name: "控制台"
    },
    component: ()=> import("../views/layout/index.vue"),
    children:[
      {
        path: "/layout",
        name: "Layout",
        meta:{
          name: "首页"
        },
        component: ()=> import("../views/admin/index.vue"),
      }
    ]
  },
  {
    path: "/info",
    name: "Info",
    meta:{
      name: "信息管理"
    },
    component: ()=> import("../views/layout/index.vue"),
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
      name: "用户管理"
    },
    component: ()=> import("../views/layout/index.vue"),
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

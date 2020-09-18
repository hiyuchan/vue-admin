import router from "./index";
import {getToken} from "../utils/kit.js"

const writeRouter = ['/login'];
//路由守卫
/**
 * 1、判断是否存在该用户
 * 2、若不在存在用户，则判断是否将要跳到登录页面，如果是，则执行next()
 * 如果不是，则执行next('/login');
 * 3、执行完next()会重新执行beforeEach(),若不判断是否要进入登录页面就直接执行next('/login')
 * 将会进入死循环！
 */
router.beforeEach((to, from, next) =>{
    if(getToken()){
        console.log("存在用户");
    }else{
        console.log("不存在用户");
        if(writeRouter.indexOf(to.path) !== -1){
            next();
        }else{
            next('/login')
        }
    }
})

/**
 * 1、直接进入layout页面时，路由参数(to.path)为'/index'，'/index'不在白名单内
 * 2、执行路由参数指向next('/login'),重新进入执行beforeEach()，此时路由参数(to.path)为'/login'
 * '/login'在白名单内，执行next(),不会重新进入执行beforeEach()； 
 */
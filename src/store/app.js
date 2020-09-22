

import {Login} from "../api/login";
import {MessageBox} from 'element-ui'


import {setToken, getToken, setUsername, getUsername, removeToken, removeUsername} from "../utils/kit.js"

// const app = {
    const state = {
        TOKEN: getToken() || '',
        USER_NAME: getUsername() || '',
        isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
    }

    const getters = { 
        // username : state=> state.USER_NAME
    }
    
    const mutations = {
        SET_isCollapse(state){
            state.isCollapse = !state.isCollapse
            sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
        },
        SET_TOKEN(state, value){
            state.TOKEN = value
        },
        SET_USERNAME(state,value){
            state.USER_NAME = value
        }
    }
    const actions = {
        login({commit}, reqData){
            return new Promise((resolve, reject)=>{
                Login(reqData).then(res=>{
                    let data = res.data.data;
                    // 将token存在vueX
                    commit('SET_TOKEN', data.token);
                    commit('SET_USERNAME', data.username);

                    //将token存在本地存储
                    setToken(data.token);
                    setUsername(data.username);
                    resolve(res)    
                }).catch((err)=>{
                    reject(err)
                })
            })
        },
        loginOut( {commit} ){
            return new Promise((resolve, reject) =>{
                MessageBox.confirm('是否退出当前用户?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(()=>{
                        // 清空本地存储的token
                        removeToken();
                        removeUsername();
                        // 清空vuex的token
                        commit('SET_TOKEN','');
                        commit('SET_USERNAME','');
                        resolve()
                    }).catch(()=>{
                        reject()
                    })
                })
        }
    }
// }

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};
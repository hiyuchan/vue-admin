import Vue from 'vue';
import SvgIcon from './SvgIcon.vue'

Vue.component('svg-icon',SvgIcon);

//
/**
 * require.context（）读取指定目录的所有文件
 * 参数1： 目录
 * 参数2： 是否遍历子级目录
 * 参数3：定义遍历文件规则
 * 
 */
const req = require.context('./svg', false,  /\.svg$/); 
const requireAll = requireContext =>{
    return requireContext.keys().map(requireContext)
}
requireAll(req)
<template>
    <div id="layout" :class=" menuStatus? 'close': 'open'">
        <layout-nav></layout-nav>
        <layout-main></layout-main>
        <layout-header></layout-header>
    </div>
</template>

<script>
import LayoutHeader from './Components/Header'
import LayoutNav from './Components/Nav'
import LayoutMain from './Components/Main'
import { reactive, ref, isRef, onMounted, computed } from "@vue/composition-api";
export default {
    name:'layout',
    components:{
        LayoutHeader, LayoutNav, LayoutMain
    },
    setup(props, {root}){
        const menuStatus = computed(()=> root.$store.state.app.isCollapse)

        return{
            menuStatus
        }
    }
}
</script>

<style lang="scss" scoped>
   #layout{
        height: 100vh;
        background-color: #ededed;
        overflow: hidden;
   }

</style>
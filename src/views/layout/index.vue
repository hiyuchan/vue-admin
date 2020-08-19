<template>
    <div id="layout">
        <layout-nav></layout-nav>
        <layout-main></layout-main>
        <layout-header></layout-header>
    </div>
</template>

<script>
import LayoutHeader from './Components/Header'
import LayoutNav from './Components/Nav'
import LayoutMain from './Components/Main'
export default {
    name:'layout',
    components:{
        LayoutHeader, LayoutNav, LayoutMain
    },
    setup(){

    }
}
</script>

<style lang="scss" scoped>
   
</style>
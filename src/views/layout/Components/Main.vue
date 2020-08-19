<template>
    <div id="main-wrap">
        <router-view/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #main-wrap{
        position: fixed;
        top: $header-height;
        left: $nav-width;
        bottom: 0;
        right: 0;
        border: 30px solid #f7f7f7;
        border-bottom: none;
        // padding: $header-height 0 0 $nav-width;
        background-color: #fff;
        box-sizing: border-box;
        }
</style>
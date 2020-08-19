<template>
    <div id="header-warp">
        头部
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #header-warp{
        position: fixed;
        top: 0;
        left: $nav-width;
        right: 0;
        height: $header-height;
        background-color: #fff;
        box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 1)
    }

</style>
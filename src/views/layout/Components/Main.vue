<template>
    <div id="main-content">
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    // #main-wrap{
    //     position: fixed;
    //     top: $header-height;
    //     left: $nav-width;
    //     bottom: 0;
    //     right: 0;
    //     border: 30px solid #f7f7f7;
    //     border-bottom: none;
    //     // padding: $header-height 0 0 $nav-width;
    //     background-color: #fff;
    //     box-sizing: border-box;
    //     }
    #main-content{
        width: 100%;
        height: 100%;
        padding-top: $header-height + 30px;
        padding-left: $nav-width + 30px;
            padding-right: 30px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        // overflow: hidden;
        .content{
            background: #fff;
            width: 100%;
            height: 100%;
            padding-top:30px;
            padding-left:30px;
            padding-right: 30px;
            box-sizing: border-box;
            -webkit-box-sizing: border-box; 
        }
    }
</style>
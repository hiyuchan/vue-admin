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
    .close{
        #main-content{
            padding-left: $close-nav-width + 30px;
            @include webkit(transition, all .3s ease 0s)
        }
    }
    #main-content{
        width: 100%;
        height: 100%;
        padding-top: $header-height + 30px;
        padding-left: $nav-width + 30px;
        padding-right: 30px;
        box-sizing: border-box;
        @include webkit(box-sizing, border-box);
        @include webkit(transition, all .3s ease 0s);
        .content{
            background: #fff;
            width: 100%;
            height: 100%;
            padding-top:30px;
            padding-left:30px;
            padding-right: 30px;
            box-sizing: border-box;
            @include webkit(box-sizing, border-box);
        }
    }
</style>
<template>
    <div id="header-warp">
        <div class="pull-left header-icon" @click="triggerCollapse"><svg-icon  iconName="menu" iconClass="menu"></svg-icon></div>
        <div class="pull-right">
            <div class="user-info pull-left">
                <svg-icon iconName="headimg" iconClass="menu"></svg-icon>管理员
            </div>
            <div class="header-icon pull-left">
                <svg-icon iconName="exit" iconClass="exit"></svg-icon>
            </div>
        </div>
    </div>

</template>

<script>
import { reactive, ref, isRef, onMounted } from "@vue/composition-api";
export default {
    setup(props, { root }){
        const triggerCollapse = ()=>{
            root.$store.commit('SET_isCollapse');
        }


        return{
            triggerCollapse
        }
    }

    
}
</script>

<style lang="scss" scoped>
.close{
    #header-warp{
        left: $close-nav-width;
        @include webkit(transition, all .3s ease 0s);
    }
}
    #header-warp{
        position: fixed;
        top: 0;
        left: $nav-width;
        right: 0;
        height: $header-height;
        line-height: $header-height;
        background-color: #fff;
        @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, 1));
        @include webkit(transition, all .3s ease 0s);
    }
    .header-icon{
        padding: 0 32px;
        svg{
            font-size:35px;
            margin-bottom: -8px;
            cursor: pointer;
        }
    }
    .user-info{
        height: 100%;
        padding: 0 32px;
        display: flex;
        align-items: center;
        border-right: 2px solid #ededed;
        svg{
            font-size: 30px;
            padding-right: 15px;
        }
        +.header-icon{
            padding: 0 25px;
            svg{
                font-size: 25px;
                cursor: pointer;
            }
        }
    }
</style>
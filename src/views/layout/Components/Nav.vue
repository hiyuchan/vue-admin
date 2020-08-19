<template>
  <div id="nav-warp">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      router
    >
        <template v-for="(item,index) in routers">
            <el-submenu v-if="!item.hidden" :key="index" :index="item.path">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{item.meta.name}}</span>
                </template>
                <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path" >{{ subItem.meta.name }}</el-menu-item>
            </el-submenu>
        </template>
    </el-menu>
  </div>
</template>

<script>
import { reactive, ref, isRef, onMounted } from "@vue/composition-api";
export default {
  setup(props, { root }) {
    /**
     * data
     */
    const routers = reactive(root.$router.options.routes);
    console.log(routers)
    const isCollapse = ref(false);

    /**
     * methods
     */
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      routers,
      isCollapse,
      handleOpen,
      handleClose
    };
  }
};
</script>

<style lang="scss" scoped>
#nav-warp {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: $nav-width;
  background-color: #344a5f;
}
</style>
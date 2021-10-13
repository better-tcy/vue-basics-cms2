<template>
  <div>
    <el-container style="height: 100vh">
      <el-aside :style="{ width: asideWidth }">
        <el-menu
          style="height: 100vh"
          :collapse="isCloseMenu"
          unique-opened
          :default-active="$route.path"
          :background-color="asideBgColor"
          :text-color="menuTextColor"
          :active-text-color="menuTextActiveColor"
          router
        >
          <div v-for="oneMenu in menuData" :key="oneMenu.path">
            <template
              v-if="
                Array.isArray(oneMenu.children) && oneMenu.children.length !== 0
              "
            >
              <el-submenu :index="oneMenu.path">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{ oneMenu.name }}</span>
                </template>
                <el-menu-item
                  v-for="twoMenu in oneMenu.children"
                  :key="twoMenu.path"
                  :index="twoMenu.path"
                >
                  <i class="el-icon-menu"></i>
                  <span slot="title">{{ twoMenu.name }}</span></el-menu-item
                >
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="oneMenu.path">
                <i class="el-icon-menu"></i>
                <span slot="title">{{ oneMenu.name }}</span></el-menu-item
              >
            </template>
          </div>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header :style="{ background: headBgColor }">
          <div class="icon">
            <i
              :style="{
                color: openCloseMenuIconColor,
                fontSize: openCloseMenuIconSize,
              }"
              :class="[isCloseMenu ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
              @click="openMenu"
            ></i>
          </div>
        </el-header>
        <el-main :style="{ background: mainBgColor }">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  inject: [
    "asideBgColor",
    "menuTextColor",
    "menuTextActiveColor",
    "headBgColor",
    "openCloseMenuIconColor",
    "openCloseMenuIconSize",
    "mainBgColor",
  ],
  data() {
    return {
      isCloseMenu: false,
      asideWidth: "200px",
    };
  },
  computed: {
    ...mapState(["menuData"]),
  },
  methods: {
    openMenu() {
      if (this.isCloseMenu) {
        this.isCloseMenu = false;
        this.asideWidth = "200px";
      } else {
        this.isCloseMenu = true;
        this.asideWidth = "100px";
      }
    },
  },
};
</script>

<style scoped>
.el-menu--collapse {
  width: auto;
}
::v-deep .el-submenu__icon-arrow {
  position: absolute;
  top: 50%;
  right: 10px;
  margin-top: -4px;
  transition: transform 0.3s;
  font-size: 12px;
}
.el-header {
  display: flex;
  align-items: center;
}
</style>
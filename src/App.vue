<template>
  <el-container>
    <Header></Header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <BottomToolbox></BottomToolbox>
    </el-footer>
  </el-container>
  <transition name="move">
    <GlobalPlayer v-show="store.isGlobalShow"></GlobalPlayer>
  </transition>
</template>

<script lang="ts" setup>
import BottomToolbox from '@/components/BottomToolbox.vue'
import Header from '@/components/Header.vue';
import GlobalPlayer from '@/components/GlobalPlayer.vue';
import { useStore } from './store/index';

const store = useStore()
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  overflow: hidden;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("https://img.zcool.cn/community/038f24d586f4f09a8012060c8f550f1.jpg");
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}

.el-header {
  // background-color: #452243;
  display: flex;
  align-items: center;
}

.el-main {
  // background-color: #452243;
  height: calc(100vh - 60px - 120px);
  overflow: auto;
}

.el-footer {
  height: 120px;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.move-enter-active,
.move-leave-active {
  transition: all 0.5s ease;
  transform: translate(0, 0) scale(1);
}

.move-enter-from,
.move-leave-to {
  transform: translate(-50%, 100%) scale(0);
}

.move-leave-from,
.move-enter-to {
  transform: translate(0, 0) scale(1);
}
</style>
